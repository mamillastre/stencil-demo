import { Build, Component, Host, Prop, State, Watch, getAssetPath, h } from '@stencil/core';
import { getSvgContent } from './request';

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.scss',
  shadow: true,
  assetsDirs: ['svg'],
})
export class MyIcon {
  /**
   * The icon key
   */
  @Prop() name?: 'circle-user' | 'house';

  /**
   * The icon source
   */
  @Prop() icon?: string;

  /**
   * The alternative name of the icon
   */
  @Prop() alt = '';

  @State() private svgContent?: string;

  componentWillLoad() {
    this.loadNameIcon();
    this.loadIcon();
  }

  @Watch('name')
  private async loadNameIcon() {
    if (Build.isBrowser && this.name) {
      const iconUrl = getAssetPath(`svg/${this.name}.svg`);

      if (iconUrl) {
        this.svgContent = await getSvgContent(iconUrl);
      }
    }
  }

  @Watch('icon')
  private async loadIcon() {
    if (Build.isBrowser && this.icon) {
      this.svgContent = await getSvgContent(this.icon);
    }
  }

  render() {
    return (
      <Host role="img" alt={this.alt || ''}>
        {this.svgContent ? <div class="icon-inner" innerHTML={this.svgContent}></div> : <div class="icon-inner"></div>}
      </Host>
    );
  }
}
