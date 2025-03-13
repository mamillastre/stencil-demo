import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

const componentCorePackage = '@stencil-demo/elements';
const customElementsDir = 'components';
const hydrateDir = 'hydrate';

export const config: Config = {
  namespace: 'stencil-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      dir: 'components',
    },
    {
      type: 'docs-readme',
      strict: true,
    },
    {
      type: 'docs-json',
      file: 'docs/docs.json',
      strict: true,
    },
    {
      type: 'docs-vscode',
      file: 'docs/vscode-data.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: hydrateDir,
    },
    angularOutputTarget({
      componentCorePackage,
      outputType: 'standalone',
      directivesProxyFile: '../angular/lib/stencil-generated/components.ts',
      customElementsDir,
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../vue/lib/stencil-generated/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      customElementsDir,
      // The Nuxt SSR do not work well for the moment with the slots: https://github.com/stenciljs/output-targets/issues/632
      // hydrateModule: `${componentCorePackage}/${hydrateDir}`,
    }),
  ],
  buildEs5: 'prod',
  plugins: [sass()],
  testing: {
    browserHeadless: 'shell',
  },
  extras: {
    // https://stenciljs.com/docs/config-extras#experimentalslotfixes
    experimentalSlotFixes: true,
    // https://stenciljs.com/docs/config-extras#experimentalscopedslotchanges
    experimentalScopedSlotChanges: true,
  },
};
