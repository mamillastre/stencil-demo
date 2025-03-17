import { test } from '@stencil/playwright';
import { expect } from '@playwright/test';

test.describe('my-counter', () => {
  test('should be initialized with a 0 counter', async ({ page }) => {
    await page.goto('/components/my-counter/test');

    // Rest of test
    const component = page.locator('my-counter#default');
    await expect(component).toHaveText('-0+');
  });

  test('should use the configured value to initialize the counter', async ({ page }) => {
    await page.goto('/components/my-counter/test');

    // Rest of test
    const component = page.locator('my-counter#initial-value');
    await expect(component).toHaveText('-10+');
  });

  test('should be rendered correctly', async ({ page }) => {
    await page.goto('/components/my-counter/test');
    await expect(page).toHaveScreenshot();
  });
});
