/**
 * vant-ui(vantUiBasciInfo/vantUiFormInfo)
 */
const storage = localStorage.getItem('vantUi') &&
	JSON.parse(localStorage.getItem('vantUi')) || {}

const state = {
	vantUiBasciInfo: storage.vantUiBasciInfo,
	vantUiFormInfo: storage.vantUiFormInfo,
}
const mutations = {
	setVantUiBasciInfo(state, data) {
		state.vantUiBasciInfo = data
	},
}
const actions = {
	setVantUiBasciInfo({
		commit
	}, data) {
		commit('setVantUiBasciInfo', data)
	},
	setVantUiFormInfo({
		commit
	}, data) {
		commit('setVantUiFormInfo', data)
	}
}

export default {
	state,
	mutations,
	actions
}
