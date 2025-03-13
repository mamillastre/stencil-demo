import { newE2EPage } from '@stencil/core/testing';

describe('my-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-counter></my-counter>');

    const element = await page.find('my-counter');
    expect(element).toHaveClass('hydrated');
  });
});
