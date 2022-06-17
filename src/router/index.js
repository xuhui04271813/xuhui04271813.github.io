import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CardList',
    component: () => import(/* webpackChunkName: "about" */ '../views/CardList.vue')
  },
  {
    path: '/entry',
    name: 'entry',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entry.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
