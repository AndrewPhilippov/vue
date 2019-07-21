import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './components/Welcome.vue';
import Chat from './components/Chat';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        next();
      },
    },
  ],
});
