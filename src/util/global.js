import {
	get,
	post
} from '@/service/index'

// main.js中import引入之后, Vue.use()安装 Vue.js 插件, install方法调用时，会将Vue作为参数传入
const install = (Vue, option) => {
	// prototype 拓展全局对象
	Vue.prototype.$appName = 'vant-prj'
	Vue.prototype.$get = get
	Vue.prototype.$post = post
}
export default install
