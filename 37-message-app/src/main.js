import Vue from 'vue';
import vueChatScroll from 'vue-chat-scroll';
import App from './App.vue';
import router from './router';

Vue.use(vueChatScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
