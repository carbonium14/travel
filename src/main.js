import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import FastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faMagnifyingGlass, faChevronDown, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/index.js'
import 'babel-polyfill'
library.add(faChevronLeft, faMagnifyingGlass, faChevronDown, faImage)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// FastClick.attach(document.body)
createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
