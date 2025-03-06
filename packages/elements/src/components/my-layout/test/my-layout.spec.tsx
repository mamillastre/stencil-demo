import { newSpecPage } from '@stencil/core/testing';
import { MyLayout } from '../my-layout';

describe('my-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyLayout],
      html: `<my-layout></my-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <my-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-layout>
    `);
  });
});
