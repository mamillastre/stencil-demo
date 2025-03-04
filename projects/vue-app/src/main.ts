import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueElements, type ElementsConfig } from "vue-elements";

const app = createApp(App);

app.use(router);

const config: ElementsConfig = { techno: "VueJs 3" };
app.use(VueElements, config);

app.mount("#app");
