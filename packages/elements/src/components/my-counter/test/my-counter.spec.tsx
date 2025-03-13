import { newSpecPage } from '@stencil/core/testing';
import { MyCounter } from '../my-counter';

describe('my-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCounter],
      html: `<my-counter></my-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <my-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-counter>
    `);
  });
});
