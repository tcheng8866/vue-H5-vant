import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css/normalize.css' // Normalize.css是一种CSS reset的替代方案

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

// 导入自己的组件库
import compWrap from 'comp-wrap'
Vue.use(compWrap)

// Vue.prototype拓展插件
import global from './global.js'
Vue.use(global)

// vconsole[非生产环境]
import Vconsole from 'vconsole'
// if (process.env.NODE_ENV !== 'production') {
//   const VConsole = new Vconsole()
//   Vue.use(VConsole)
// }
const VConsole = new Vconsole()
Vue.use(VConsole)

// 禁止生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
