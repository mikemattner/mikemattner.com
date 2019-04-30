import Vue from 'vue';

Vue.prototype.$image = (path) => {
  if (!path) return null;
  return require.context('~/assets/img')(`./${path}`);
};
Vue.prototype.$backgroundImage = path => ({ backgroundImage: `url(${Vue.prototype.$image(path)})` });
