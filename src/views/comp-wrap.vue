<template>
  <div class="page">
    <div class="wrap">
		<p>1. install comp-wrap</p>
		<p>2. import compWrap from 'comp-wrap'</p>
		<p>Vue.use(compWrap)</p>
      <w-input
        :label="labelTel"
        v-model.trim="modelTel"
        maxlength="11"
        type="number"
        placeholder="测试Number length"
      ></w-input>
      <!-- type="tel": 用的是input自带的属性；:type="telModel" 这种是写在data传入组件 -->
      <w-input
        :label="labelNumber"
        v-model.trim="modelNumber"
        :maxlength="maxlength"   
        type="number"
        placeholder="测试Number length"
      ></w-input>
      <w-button :disabled="disabled" @click="bindClick()">测试</w-button>
	  <w-count-down :countDown="5" @click="handClick()"></w-count-down>
    </div>
  </div>
</template>

<script>
/* import {wInput, wButton } from 'comp-wrap'  // 这种没成功 */
export default {
  name: "",
  mixins: [],
/* components: { wInput, wButton }, */
  props: {},
  data() {
    return {
      labelTel: "电话",
      modelTel: "18702906728",
      labelNumber: '测试数字',
      modelNumber: "18702906728",
      disabled: false,
      maxlength: '11'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    bindClick() {
      // 不存在时机问题： 默认可以点击、点击一次后禁止点击
      console.log(this.modelTel);
      console.log(this.modelNumber);
      this.disabled = true;
    },
	handClick() {}
  }
};
</script>
<style scoped lang="less">
.page {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fafafa; //灰色
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  word-wrap: break-word;
  .wrap {
    background-color: #ffffff;
    height: 100%;
	padding: 20px;
  }
}
</style>
