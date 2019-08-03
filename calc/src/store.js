import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMale: true,
  },
  getters: {
    isCurrentlyMale() {
      return this.state.isMale === true;
    },
    isCurrentlyFemale() {
      return this.state.isMale === false;
    },
  },
  mutations: {
    changeGender(state) {
      state.isMale = !state.isMale;
    },
    setMale(state) {
      state.isMale = true;
    },
    setFemale(state) {
      state.isMale = false;
    },
  },
  actions: {
    changeGender({ commit }) {
      commit('changeGender');
    },
    setMale({ commit }) {
      commit('setMale');
    },
    setFemale({ commit }) {
      commit('setFemale');
    }
  }
})
