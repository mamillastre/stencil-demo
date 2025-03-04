import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const componentCorePackage = 'elements';
const customElementsDir = 'dist/components';

export const config: Config = {
  namespace: 'elements',
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
      directivesProxyFile: '../angular/projects/rdr-elements/src/lib/stencil-generated/components.ts',
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
