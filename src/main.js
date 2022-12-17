import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
import router from "./router";
import store from "./store";
import moment from "moment";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
