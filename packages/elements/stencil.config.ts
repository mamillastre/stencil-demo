import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

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
      componentCorePackage: 'elements',
      outputType: 'standalone',
      directivesProxyFile: '../angular/projects/rdr-elements/src/lib/stencil-generated/components.ts',
      customElementsDir: 'dist/components',
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
