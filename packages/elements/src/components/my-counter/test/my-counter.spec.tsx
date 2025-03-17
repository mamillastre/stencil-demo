import { newSpecPage } from '@stencil/core/testing';
import { MyCounter } from '../my-counter';

describe('my-counter', () => {
  it('should be initialized with a 0 counter', async () => {
    const { element } = await initPage({ html: `<my-counter></my-counter>` });
    const counterText = element.shadowRoot.querySelector('.wrapper > div');
    expect(counterText.innerHTML).toEqual('0');
  });

  it('should use the configured value to initialize the counter', async () => {
    const { element } = await initPage({ html: `<my-counter initial-value="10"></my-counter>` });
    const counterText = element.shadowRoot.querySelector('.wrapper > div');
    expect(counterText.innerHTML).toEqual('10');
  });
});

async function initPage({ html }: { html: string }) {
  const page = await newSpecPage({
    components: [MyCounter],
    html,
  });

  const element = page.body.querySelector('my-counter');

  return {
    page,
    element,
  };
}
