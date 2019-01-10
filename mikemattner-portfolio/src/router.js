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
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "type" */ './views/Work.vue'),
      meta: { title: 'My Work' },
    },
    {
      path: '/styles',
      name: 'styles',
      component: () => import(/* webpackChunkName: "type" */ './views/Styles.vue'),
      meta: { title: 'Style Guid' },
    },
  ],
});
