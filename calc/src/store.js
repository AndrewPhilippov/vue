import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isMetric: true,
        isMale: true,
        dob: null,
    },
    /*getters: {
        isCurrentlyMale() {
            return this.state.isMale === true;
        },
        isCurrentlyFemale() {
            return this.state.isMale === false;
        },
        areUnitsMetric() {
            return this.state.isMetric === true;
        },
        areUnitsImperial() {
            return this.state.isMetric === false;
        }
    },*/
    mutations: {
        changeGender(state) {
            state.isMale = !state.isMale;
        },
        setMale(state) {
            state.isMale = true;
        },
        setFemale(state) {
          console.log(state);
            state.isMale = false;
        },
        changeUnits(state) {
            state.isMetric = !state.isMetric;
        },
        setMetric(state) {
            state.isMetric = true;
        },
        setImperial(state) {
            state.isMetric = false;
        },
        setAge(state, payload) {
            state.dob = payload;
        }
    },
    actions: {
        changeGender({commit}, payload) {
            commit('changeGender', payload);
        },
        setMale({commit}) {
            commit('setMale');
        },
        setFemale({commit}) {
            commit('setFemale');
        },
        changeUnits({commit}) {
            commit('changeUnits')
        },
        setMetric({commit}) {
            commit('setMetric');
        },
        setImperial({commit}) {
            commit('setImperial');
        },
    }
});
export default store;