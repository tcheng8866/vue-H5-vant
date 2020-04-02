<template>
	<div class="component">
		<!-- 其他组件（日历、选择器） -->
		<div class="wrap">
			<div class="calendar">
				<!-- type="range"：选择区间; 跨月的情况会竖排多个日历  -->
				<!-- :formatter="formatter"：可以自定义方法、替换某些日期的显示 -->
				<!-- color="#07c160"：自定义颜色、:show-confirm="false":隐藏确定、自动触发confirm事件 -->
				<!-- close 关闭弹层触发 -->
				<van-cell title="选择日期区间" v-model="date" @click="show = true" />
				<van-calendar v-model="show" type="range" color="#07c160" :show-confirm="false" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
			</div>
			<div class="datetimePicker">
				<!-- DatetimePicker 时间选择器，通常与弹出层组件配合使用 -->
				<!-- type：date/time/year-month; 默认2010.01.01开始; confirm 确定事件 -->
				<van-cell title="选择日期区间" v-model="date2" @click="show2 = true" />
				<van-popup v-model="show2" position="center" round :style="{ width: '80%', height: '50%' }">
					<van-datetime-picker v-model="currentDate" type="date" @confirm="confirm($event)" />
				</van-popup>
			</div>
		</div>
	</div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
	name: '',
	mixins: [],
	components: {},
	props: {},
	data() {
		return {
			date: '',
			show: false,
			minDate: new Date(2010, 4, 1),
			maxDate: new Date(2011, 4, 31),
			date2: '',
			show2: false,
			currentDate: new Date()
		};
	},
	computed: {},
	watch: {},
	created() {
		this.dialog();
	},
	mounted() {},
	destroyed() {},
	methods: {
		formatDate(date) {
			// getYear 在IE中是可以正确获取年份：2010，但是在FF等浏览器下则为：110。
			// 原因则是 在 FF等浏览器内 getYear 返回的是 "当前年份-1900" 的值（即年份基数是1900）
			return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
		},
		onConfirm(date) {
			console.log('calendar', date);
			const [start, end] = date;
			this.show = false;
			this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
		},
		confirm(event) {
			console.log('datetimePicker', event);
			this.date2 = this.formatDate(event);
			this.show2 = false;
		},
		dialog() {
			// Dialog  可以组件使用、可以this.$dialog、可以import进来Dialog.xx
			// then：监听确定按钮、catch：监听取消按钮
			Dialog.confirm({
				title: '标题',
				message: '弹窗内容'
			})
				.then(() => {
					this.toast();
				})
				.catch(() => {
					Toast('提示内容');
					// Toast.success('成功文案');
					// Toast.fail('失败文案');
				});
		},
		toast() {
			// 一版用简单的就可以了、也可以自定义效果
			const toast = Toast.loading({
				duration: 0, // 持续展示 toast
				forbidClick: true,
				message: '倒计时 3 秒'
			});

			let second = 2;
			const timer = setInterval(() => {
				second--;
				if (second) {
					toast.message = `倒计时 ${second} 秒`;
				} else {
					clearInterval(timer);
					// 手动清除 Toast
					Toast.clear();
				}
			}, 1000);
		}
	}
};
</script>

<style scoped lang="less">
.component {
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
	}
}
</style>
