import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFemale: true,
  },
  getters: {
    getCurrentGender: state => state.isFemale,
  },
  mutations: {
    changeGender() {
      console.log('i am changing the gender wooooahhh');
      return this.state.isFemale = ! this.state.isFemale
    }
  },
  actions: {
    changeGender() {
      this.state.commit('changeGender');
    }
  }
})
