import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

// 全局
import global from './util/global.js'
Vue.use(global)

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// lazy-load
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: require('@/assets/image/error.png'),
  loading: require('@/assets/image/loading.gif')
})
// vconsole
import Vconsole from 'vconsole'
const VConsole = new Vconsole()
Vue.use(VConsole)

// 禁止生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
