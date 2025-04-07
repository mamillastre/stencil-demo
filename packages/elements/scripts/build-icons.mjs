import fs from 'fs-extra';
import { join } from 'path';

/**
 * Generate the icon package
 * Inspired by the Ionicons script: https://github.com/ionic-team/ionicons/blob/main/scripts/build.ts
 */
async function build(rootDir) {
  try {
    const srcDir = join(rootDir, 'src');
    const srcSvgDir = join(srcDir, 'components', 'my-icon', 'svg');
    const iconDir = join(rootDir, 'icons');

    await fs.emptyDir(iconDir);

    const srcSvgData = await getSvgs(srcSvgDir);

    await createIconPackage(iconDir, srcSvgData);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function getSvgs(srcSvgDir) {

  const svgFiles = (await fs.readdir(srcSvgDir)).filter((fileName) => {
    return !fileName.startsWith('.') && fileName.endsWith('.svg');
  });

  const svgData = await Promise.all(
    svgFiles.map(async (fileName) => {

      if (fileName.toLowerCase() !== fileName) {
        throw new Error(`svg filename "${fileName}" must be all lowercase`);
      }
      const srcFilePath = join(srcSvgDir, fileName);

      const dotSplit = fileName.split('.');
      if (dotSplit.length > 2) {
        throw new Error(`svg filename "${fileName}" cannot contain more than one period`);
      }

      const iconName = dotSplit[0];

      if (reservedKeywords.has(iconName)) {
        throw new Error(`svg icon name "${iconName}" is a reserved JavaScript keyword`);
      }

      return {
        fileName,
        srcFilePath,
        srcSvgContent: await fs.readFile(srcFilePath, 'utf8'),
        iconName,
        exportName: camelize(iconName),
      };
    }),
  );

  return svgData.sort((a, b) => {
    if (a.exportName < b.exportName) return -1;
    if (a.exportName > b.exportName) return 1;
    return 0;
  });
}

async function createIconPackage(iconDir, srcSvgData) {
  const iconPkgJsonFilePath = join(iconDir, 'package.json');

  await Promise.all([
    createEsmIcons(iconDir, srcSvgData),
    createCjsIcons(iconDir, srcSvgData),
    createDtsIcons(iconDir, srcSvgData),
  ]);

  const iconPkgJson = {
    "name": "@stencil-demo/elements/icons",
    "description": "StencilDemo icons",
    "module": "index.mjs",
    "main": "index.js",
    "typings": "index.d.ts",
    "private": true
  };

  const jsonStr = JSON.stringify(iconPkgJson, null, 2) + '\n';
  await fs.writeFile(iconPkgJsonFilePath, jsonStr);
}

async function createEsmIcons(iconDir, srcSvgData) {
  const iconEsmFilePath = join(iconDir, 'index.mjs');

  const o = [];

  srcSvgData.forEach((svgData) => {
    o.push(`export const ${svgData.exportName} = ${getDataUrl(svgData)}`);
  });

  await fs.writeFile(iconEsmFilePath, o.join('\n') + '\n');
}

async function createCjsIcons(iconDir, srcSvgData) {
  const iconCjsFilePath = join(iconDir, 'index.js');

  const o = [];

  srcSvgData.forEach((svgData) => {
    o.push(`exports.${svgData.exportName} = ${getDataUrl(svgData)}`);
  });

  await fs.writeFile(iconCjsFilePath, o.join('\n') + '\n');
}

async function createDtsIcons(iconDir, srcSvgData) {
  const iconDtsFilePath = join(iconDir, 'index.d.ts');

  const o = [];

  srcSvgData.forEach((svgData) => {
    o.push(`export declare var ${svgData.exportName}: string;`);
  });

  await fs.writeFile(iconDtsFilePath, o.join('\n') + '\n');
}

function getDataUrl(svgData) {
  let svg = svgData.srcSvgContent;
  if (svg.includes(`'`)) {
    throw new Error(`oh no! no single quotes allowed! ${svgData.fileName}`);
  }
  if (svg.includes(`\n`) || svg.includes(`\r`)) {
    throw new Error(`oh no! no new lines allowed! ${svgData.fileName}`);
  }
  svg = svg.replace(/"/g, "'");
  return `"data:image/svg+xml;utf8,${svg}"`;
}

function camelize(text) {
  let words = text.split(/[-_]/g); // ok one simple regexp.
  return words[0].toLowerCase() + words.slice(1).map(upFirst).join('');
}

function upFirst(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

// https://mathiasbynens.be/notes/reserved-keywords
const reservedKeywords = new Set([
  'do',
  'if',
  'in',
  'for',
  'let',
  'new',
  'try',
  'var',
  'case',
  'else',
  'enum',
  'eval',
  'null',
  'this',
  'true',
  'void',
  'with',
  'await',
  'break',
  'catch',
  'class',
  'const',
  'false',
  'super',
  'throw',
  'while',
  'yield',
  'delete',
  'export',
  'import',
  'public',
  'return',
  'static',
  'switch',
  'typeof',
  'default',
  'extends',
  'finally',
  'package',
  'private',
  'continue',
  'debugger',
  'function',
  'arguments',
  'interface',
  'protected',
  'implements',
  'instanceof',
  'constructor',
]);

build(join(import.meta.dirname, '..'));
