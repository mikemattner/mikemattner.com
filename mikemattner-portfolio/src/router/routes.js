import Home from '@/views/Home.vue';
import Work from '@/views/Work.vue';
import Contact from '@/views/Contact.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'About' },
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      meta: { title: 'My Work' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'Contact' },
    },
];

export default routes;