const vantUiBasic = () => import('@/views/vant-ui/basic.vue')
const vantUiForm = () => import('@/views/vant-ui/form.vue')
const vantUiOther = () => import('@/views/vant-ui/other.vue')

//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前。
const vantUiRouters = [
	{
		path: 'basic', 
		name: 'vantUiBasic',
		component: vantUiBasic,
		meta: {
			title: '基础',
		}
	},
	{
		path: 'form',
		name: 'vantUiForm',
		component: vantUiForm,
		meta: {
			title: '表单',
		}
	},
	{
		path: 'other',
		name: 'vantUiOther',
		component: vantUiOther,
		meta: {
			title: '其他',
		}
	}
]

export default vantUiRouters
