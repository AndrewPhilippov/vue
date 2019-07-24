import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import firebase from 'firebase';
import Signup from './components/auth/Signup.vue';
import Login from './components/auth/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Check if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // Check auth state of user
    const user = firebase.auth().currentUser;
    if (user) {
      //  user signed in, proceed to route
      next();
    } else {
      // no user signed in - redirect to login
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
