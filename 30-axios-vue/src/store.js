import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
  },
  mutations: {

  },
  actions: {
    signup ({ commit }, authData) {
      const apiKey = 'AIzaSyCyJPW-yyIP7e-7Q9RE-lQxtbfCB4mnOUw';
      axios.post(`/signupNewUser?key=${apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(response => console.log(response))
          .catch(error => console.log(error));
    },
    login ({ commit }, authData) {
      const apiKey = 'AIzaSyCyJPW-yyIP7e-7Q9RE-lQxtbfCB4mnOUw';
      axios.post(`/verifyPassword?key=${apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(response => console.log(response))
          .catch(error => console.log(error));
    }
  },
  getters: {

  }
})