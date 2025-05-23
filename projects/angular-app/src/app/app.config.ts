import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ElementsConfig, provideAngularElements } from '@stencil-demo/angular';

import { routes } from './app.routes';

const config: ElementsConfig = { techno: 'angular 19' };

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAngularElements(config),
  ],
};
