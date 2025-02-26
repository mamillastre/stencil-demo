import { provideHttpClient } from '@angular/common/http';
import { makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { initialize } from 'elements';
// import { defineCustomElements } from 'elements/loader';

/**
 * Sets up providers necessary to use the RDR library in the application.
 */
export function provideRdr(config: any) {
  return makeEnvironmentProviders([
    provideAppInitializer(() => initialize(config)),
    // Define all custom elements in the app. For test purpose, incompatible with the standalone components
    // provideAppInitializer(() => {
    //   defineCustomElements();
    // }),
    provideHttpClient(),
  ]);
}
