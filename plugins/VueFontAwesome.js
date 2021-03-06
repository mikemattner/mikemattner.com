// vue-fontawesome: https://www.npmjs.com/package/@fortawesome/vue-fontawesome
// icon library: https://fortawesome.com/sets/font-awesome-5-solid
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faChevronRight,
  faChevronLeft,
  faExternalLinkAlt,
  faLink,
  faSearch,
  faPlus,
  faTimes,
  faQuoteLeft,
  faStream,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart,
  faChevronRight,
  faChevronLeft,
  faExternalLinkAlt,
  faLink,
  faSearch,
  faPlus,
  faTimes,
  faQuoteLeft,
  faStream
)

Vue.component('fa-icon', FontAwesomeIcon)
