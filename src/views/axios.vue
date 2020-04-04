<template>
	<div class="page">
		<div class="wrap">
			<van-field v-model="tel" label="手机号码" placeholder="jsonp测试" />
			<van-button icon="star-o" type="primary" @click="clickBtn()">按钮</van-button>
			<van-panel title="手机号查询" desc="" status="jsonp">
				{{ resText }}
			</van-panel>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";

	export default {
		name: "",
		mixins: [],
		components: {},
		props: {},
		data() {
			return {
				tel: 18702906728,
				resText: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm'
			};
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		destroyed() {},
		methods: {
			async clickBtn() {
				const res = await this.$jsonp("https://tcc.taobao.com/cc/json/mobile_tel_segment.htm", {
						tel: this.tel
					})
					.then(res => {
						this.resText = res
					})
					.catch((err) => {
						this.resText = err
					})
			},
		}
	};
</script>
<style scoped lang="less">
	.page {
		position: relative;
		width: 100%;
		height: 100%;
		background: rgba(243, 243, 243, 1); //灰色
		font-size: 14px;
		text-align: center;
		vertical-align: middle;
		word-wrap: break-word;

		.wrap {
			background-color: #ffffff;
			padding: 50px 20px;

			/deep/ .van-field__label {
				line-height: 37px;
			}

			/deep/ .van-field__value {
				border: 1px solid #999;
				height: 25px;
				padding: 5px 10px;
			}
		}
	}
</style>
