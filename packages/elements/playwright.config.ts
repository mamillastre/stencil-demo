import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

// Add custom Stencil matchers to Playwright assertions
expect.extend(matchers);

export default createConfig({
  // Overwrite Playwright config options here
  use: { baseURL: 'http://localhost:3333' },
  webServer: {
    url: 'http://localhost:3333/ping',
  },
});
