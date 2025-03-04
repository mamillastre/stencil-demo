import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const componentCorePackage = '@stencil-demo/elements';
const customElementsDir = 'dist/components';

export const config: Config = {
  namespace: 'StencilDemo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
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
      customElementsDir,
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
