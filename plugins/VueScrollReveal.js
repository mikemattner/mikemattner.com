import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

// Vue.use(VueScrollReveal)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  delay: 500,
  useDelay: 'once',
  scale: 1.2,
  distance: '10px',
  easing: 'cubic-bezier(0.68, 0, 0.265, 1.55)',
  mobile: false,
})
