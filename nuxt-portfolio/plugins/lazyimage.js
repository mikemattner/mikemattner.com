import Vue from 'vue';
import { VLazyImagePlugin } from 'v-lazy-image';

Vue.use(VLazyImagePlugin);

Vue.prototype.$intersectionOptions = {
  rootMargin: '50%',
};
