import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
axios.defaults.baseURL = 'https://vuejs-http-f341c.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'Some value in here';
axios.defaults.headers.get['Accepts'] = 'application.json';

const reqInterceptor = axios.interceptors.request.use(config => {
   console.log('Request interceptor: ', config);
   return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
    console.log('Response interceptor: ', res);
    return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
