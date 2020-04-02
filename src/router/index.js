import Vue from 'vue'
import VueRouter from 'vue-router'

import defaultView from '@/views/vuex.vue'

import vantUiViews from '@/views/vant-ui/vant-ui.vue'
import vantUiRouters from './vant-ui.js'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
	  name: 'default',
      component: defaultView
  },
  {
      path: '/',
  	  name: 'vuex',
      component: defaultView
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
