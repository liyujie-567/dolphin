import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import LeftContent from '../components/LeftContent.vue'
import ContentTop from '../components/ContentTop.vue'
import RightContent from '../components/RightContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/leftContent',
    name: 'leftContent',
    component: LeftContent
  },
  {
    path: '/contentTop',
    name: 'contentTop',
    component: ContentTop
  },
  {
    path: '/rightContent',
    name: 'rightContent',
    component: RightContent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
