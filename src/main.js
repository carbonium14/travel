import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronLeft, faMagnifyingGlass, faChevronDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
FastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
