const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "type" */ '@/views/Work.vue'),
      meta: { title: 'My Work' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "type" */ '@/views/Contact.vue'),
      meta: { title: 'Contact' },
    },
];

export default routes