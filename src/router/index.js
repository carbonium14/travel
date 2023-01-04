import { createRouter, createWebHashHistory } from 'vue-router'

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

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
