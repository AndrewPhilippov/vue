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
    authUser (state, userData){
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signup ({ commit }, authData) {
      const apiKey = 'AIzaSyCyJPW-yyIP7e-7Q9RE-lQxtbfCB4mnOUw';
      axios.post(`/signupNewUser?key=${apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(response => {
            console.log(response);
            commit('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
            });
          })
          .catch(error => console.log(error));
    },
    login ({ commit }, authData) {
      const apiKey = 'AIzaSyCyJPW-yyIP7e-7Q9RE-lQxtbfCB4mnOUw';
      axios.post(`/verifyPassword?key=${apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(response => {
            console.log(response);
            console.log(response.data.userId);
            commit('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
            });
          })
          .catch(error => console.log(error));
    }
  },
  getters: {

  }
})