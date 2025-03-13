import { Component, Host, h } from '@stencil/core';

/**
 * A demo layout component
 *
 * @slot - Layout content
 * @slot header - Layout header
 * @slot footer - Layout footer
 *
 * @part content - The content wrapper
 * @part header - The header wrapper
 * @part footer - The footer wrapper
 *
 * @customTag This is a custom tag for the documentation
 */
@Component({
  tag: 'my-layout',
  styleUrl: 'my-layout.scss',
  shadow: true,
})
export class MyLayout {
  render() {
    return (
      <Host>
        <div part="header">
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
        <div part="footer">
          <slot name="footer"></slot>
        </div>
      </Host>
    );
  }
}
