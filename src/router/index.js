import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'
// import City from '../views/City/City.vue'
// import Detail from '../views/detail/Detail.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: () => import('../views/Home/Home.vue')
}, {
  path: '/city',
  name: 'city',
  component: () => import('../views/City/City.vue')
}, {
  path: '/detail/:id',
  name: 'detail',
  component: () => import('../views/detail/Detail.vue')
}]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
