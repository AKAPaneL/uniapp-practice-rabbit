import Vue from "vue";
import Vuex from "vuex";
import persistence from "vuex-uniapp-persistence";

Vue.use(Vuex);
const store = new Vuex.Store({
  plugins:[persistence],
  state: {
    safeAreaInsets:uni.getSystemInfoSync().safeAreaInsets,
    safeArea:uni.getSystemInfoSync().safeArea,
    buttonArea:uni.getMenuButtonBoundingClientRect()
  },
  getters: {},
  mutations: {},
  modules: {},
});
export default store;
