import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Yogasessions from './views/Yogasessions.vue';
import Yogasession from './views/Yogasession.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/yogasessions',
      name: 'yogasessions',
      component: Yogasessions,
    },
    {
      path: '/yogasession/:id',
      name: 'yogasession',
      component: Yogasession
    }
  ],
});
