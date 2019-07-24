import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const app = null;

// Wait for firebase auth init before creating the app
firebase.auth().onAuthStateChanged(() => {
  // Init app if not already creates
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
