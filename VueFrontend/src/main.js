import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/style/global.css";
import { registerGlobalComponents } from "./utils/import";

const app = createApp(App);
app.config.productionTip = false;

registerGlobalComponents(app);
app.use(router);
app.use(Antd);
app.mount("#app");
