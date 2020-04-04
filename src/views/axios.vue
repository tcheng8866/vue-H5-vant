<template>
	<div class="page">
		<div class="wrap">
			<van-button icon="star-o" type="primary" @click="clickBtn()">按钮</van-button>
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
			return {};
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		destroyed() {},
		methods: {
			async clickBtn() {
				const res = await this.$post("v1/batch", {
					ips: '8.8.8.8'
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
