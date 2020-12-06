import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

// Vue.use(VueScrollReveal)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  delay: 500,
  useDelay: 'always',
  scale: 1,
  distance: '10px',
  easing: 'ease-in-out',
  mobile: false,
})
