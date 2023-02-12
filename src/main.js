import Vue from "vue";
import App from "./App";
import store from "./store"; // 新代码

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  store, // 新代码
  ...App,
});
app.$mount();
