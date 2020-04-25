<template>
  <div class="page">
    <div class="wrap">
     <w-input
        :label="label"
        v-model.trim="modelTel"
        :maxlength="maxlength"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
      ></w-input>
     <w-button :disabled="disabled" @click="bindClick()">测试</w-button>
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
      label: "电话号码：",
      modelTel: "18702906728",
      maxlength: 1000,
      type: "tel",
      placeholder: "",
      disabled: false
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
      this.disabled = true;
    }
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
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  .wrap {
    background-color: #ffffff;
    height: 100%;
	padding: 20px;
  }
}
</style>
