import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../layouts/layoutsDefault.vue"))
  );
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("../layouts/layoutsAuth.vue"))
  );
}
