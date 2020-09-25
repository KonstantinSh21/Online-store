import Vue from 'vue'
import VueRouter from 'vue-router'
import Basket from '../components/Header/Nav/Basket.vue'
import StoreWrapper from '../components/Header/Nav/StoreWrapper.vue'
import Registration from '../components/Header/Nav/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StoreWrapper',
    component: StoreWrapper
  },
  {
    path: '/registration',

    name: Registration,
    component: () => import('../components/Header/Nav/Registration.vue')
  },
  {
    path: '/basket',

    name: Basket,
    component: () => import('../components/Header/Nav/Basket.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
