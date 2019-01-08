import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "type" */ './views/About.vue'),
      meta: { title: 'About This Thing' },
    },
    {
      path: '/type',
      name: 'type',
      component: () => import(/* webpackChunkName: "type" */ './views/Type.vue'),
      meta: { title: 'Typographic Styles' },
    },
  ],
});
