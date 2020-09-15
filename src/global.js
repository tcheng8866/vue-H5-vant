import {
	get,
	post,
	jsonp
} from '@/service/index'
import platform from '@/util/platform.js'


// main.js中import引入之后, Vue.use()安装 Vue.js 插件, install方法调用时，会将Vue作为参数传入
const install = (Vue, option) => {
	// prototype 拓展全局对象
	Vue.prototype.$get = get
	Vue.prototype.$post = post
	Vue.prototype.$jsonp = jsonp
	Vue.prototype.$platform = platform

	Vue.prototype.$appName = 'vant-prj'

	Vue.prototype.$APPID_PAY10086 = 'wx3aaa7500ba3b7178' // 10086支付

	Vue.prototype.$reg = {
		phone: /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/, // 手机号码
		idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 身份证校验
	}

}
export default install
