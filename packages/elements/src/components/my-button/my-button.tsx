import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Button component
 *
 * @slot - Button content
 * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
 */
@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop() disabled = false;

  render() {
    return (
      <Host class={this.disabled ? 'button-disabled' : ''}>
        <button disabled={this.disabled}>
          <slot name="start" />
          <slot />
        </button>
      </Host>
    );
  }
}
