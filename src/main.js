import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

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
const vConsole = new Vconsole()
Vue.use(vConsole)

// 禁止生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
