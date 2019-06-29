import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
axios.defaults.baseURL = 'https://vuejs-http-f341c.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'Some value in here';
axios.defaults.headers.get['Accepts'] = 'application.json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
