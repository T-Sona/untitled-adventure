import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router, { getNavigationGuard } from "./router";
import store from "./store";
import "./registerServiceWorker";

const middleware = getNavigationGuard(store);
router.beforeEach(middleware);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
