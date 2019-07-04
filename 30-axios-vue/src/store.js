import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth.js'
import globalAxios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null,
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser(state, user) {
            state.user = user
        }
    },
    actions: {
        signup({commit, dispatch}, authData) {
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
                    dispatch('storeUser', authData)
                })
                .catch(error => console.log(error));
        },
        login({commit}, authData) {
            const apiKey = 'AIzaSyCyJPW-yyIP7e-7Q9RE-lQxtbfCB4mnOUw';
            axios.post(`/verifyPassword?key=${apiKey}`, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
                .then(response => {
                    console.log(response);
                    console.log(response.data.localId);
                    commit('authUser', {
                        token: response.data.idToken,
                        userId: response.data.localId
                    });
                })
                .catch(error => console.log(error));
        },
        storeUser({commit, state}, userData) {
            if (!state.idToken) {
                return
            }
            globalAxios.post(`/users.json?auth=${state.idToken}`, userData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },
        fetchUser({commit, state}) {
            if (!state.idToken) {
                return
            }
            globalAxios.get(`/users.json?auth=${state.idToken}`)
                .then(res => {
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users);
                    commit('storeUser', users[0])
                })
                .catch(err => console.log(err));
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
})