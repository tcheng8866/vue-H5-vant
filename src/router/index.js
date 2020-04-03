import Vue from 'vue'
import VueRouter from 'vue-router'

import vuexView from '@/views/vuex.vue'
import axiosView from '@/views/axios.vue'

import vantUiViews from '@/views/vant-ui/vant-ui.vue'
import vantUiRouters from './vant-ui.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: vuexView
  },
  {
    path: '/',
    name: 'vuex',
    component: vuexView
  },
  {
    path: '/axios',
    name: 'axios',
    component: axiosView
  },
  {
    path: '/vantUi',
    component: vantUiViews,
    children: vantUiRouters
  }
]

const router = new VueRouter({
  routes
})

export default router
