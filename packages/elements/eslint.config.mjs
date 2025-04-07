import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stencilLint from "@stencil-community/eslint-plugin";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: ["dist", "loader", "www", "docs", "hydrate", "eslint.config.mjs", "stencil.config.ts", "playwright.config.ts", "**/*.figma.ts", "scripts"]
  },
  {
    languageOptions: {
      globals: globals.browser, parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...stencilLint.configs.flat.recommended,
    rules: {
      ...stencilLint.configs.flat.recommended.rules,
      // Disable the rule. It does not work has expected
      '@stencil-community/strict-boolean-conditions': 0
    }
  }
];
