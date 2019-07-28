import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFemale: true,
  },
  getters: {
  },
  mutations: {
    changeGender() {
      return this.isFemale = ! this.state.isFemale
    }
  },
  actions: {
    changeGender() {
      return this.state.commit('changeGender');
    }
  }
})
