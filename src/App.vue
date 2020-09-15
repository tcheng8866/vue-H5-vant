<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">vuex</router-link>|
      <router-link to="/axios">axios</router-link>|
      <router-link to="/bmap">bmap</router-link>|
      <router-link to="/wx">wx</router-link>|
      <router-link to="/compwrap">compwrap</router-link>|
      <router-link to="/vantUi/basic">basic</router-link>|
      <router-link to="/vantUi/form">form</router-link>|
      <router-link to="/vantUi/other">other</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
	export default {
		mixins: [],
		components: {},
		props: {},
		data() {
			return {};
		},
		computed: {},
		watch: {},
		created() {
			const ua = this.$platform.ua
			console.log('userAgent设备信息', ua)
			if (this.$platform.isWechat) {
				this.setWeiXinJSConfig()
			}
		},
		mounted() {},
		destroyed() {},
		methods: {
			setWeiXinJSConfig() {
				console.log('wx微信', wx)
				wx.config({
					debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: this.$APPID_PAY10086, // 必填，公众号的唯一标识
					timestamp: '', // 必填，生成签名的时间戳
					nonceStr: '', // 必填，生成签名的随机串
					signature: '', // 必填，签名
					jsApiList: ['updateAppMessageShareData', 'getLocation', 'scanQRCode', 'getNetworkType'] // 必填，需要使用的JS接口列表
				});
			}
		}
	};
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px 10px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
