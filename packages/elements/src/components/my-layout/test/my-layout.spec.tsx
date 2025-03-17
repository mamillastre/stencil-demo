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
          <div part="header">
            <slot name="header"></slot>
          </div>
          <div class="content" part="content">
            <slot></slot>
          </div>
          <div part="footer">
            <slot name="footer"></slot>
          </div>
        </mock:shadow-root>
      </my-layout>
    `);
  });
});
