import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: {
      x: 0,
      y: 0,
    }
  },
  mutations: {
    setCoord(state, coord) {
      state.page = coord;
    },
  }
})