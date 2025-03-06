import { newE2EPage } from '@stencil/core/testing';

describe('my-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-layout></my-layout>');

    const element = await page.find('my-layout');
    expect(element).toHaveClass('hydrated');
  });
});
