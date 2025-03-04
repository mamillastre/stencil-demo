import { App, Plugin } from "vue";
import { ElementsConfig, initialize } from "elements";

export const VueElements: Plugin<[ElementsConfig?]> = {
  async install(_: App, config: ElementsConfig = {}) {
    initialize(config);
  },
};
