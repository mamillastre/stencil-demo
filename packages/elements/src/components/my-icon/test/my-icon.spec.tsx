import { newSpecPage } from '@stencil/core/testing';
import { MyIcon } from '../my-icon';

describe('my-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyIcon],
      html: `<my-icon></my-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <my-icon alt="" role="img">
        <mock:shadow-root>
          <div class="icon-inner"></div>
        </mock:shadow-root>
      </my-icon>
    `);
  });
});
