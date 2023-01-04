import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import City from '../views/City/City.vue'
import Detail from '../views/detail/Detail.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/city',
  name: 'city',
  component: City
}, {
  path: '/detail/:id',
  name: 'detail',
  component: Detail
}]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
