import Vue from "vue";
import Vuex from "vuex";
import game from "./modules/game";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: { game }
});
