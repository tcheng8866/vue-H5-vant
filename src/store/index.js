import Vue from 'vue'
import Vuex from 'vuex'

import plugins from './plugins.js'
import vantUi from './vant-ui.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		vantUi
	},
	plugins
})
