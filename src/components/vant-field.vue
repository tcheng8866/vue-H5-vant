<template>
  <div class="component">
    <!-- 表单组件（输入框） -->
    <!-- 通过 button 插槽可以在输入框尾部插入按钮 -->
    <!-- 通过 input 插槽可以在把右侧输入框部分替换成步进器、评分、选择器、开关、单选、多选 -->
    <div class="wrap">
      <div class="field-input">
        <!-- required：必填*号、left-icon：左侧图标、clearable：可清除 -->
        <!--  input-align="right" 左右对齐 -->
        <!-- 输入任意文本 -->
        <van-field
          v-model="text"
          label="文本"
          placeholder="左右对齐"
          input-align="right"
        />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="tel" type="tel" label="手机号" required />
        <!-- 允许输入正整数，调起纯数字键盘 -->
        <van-field v-model="digit" type="digit" label="整数" />
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <van-field
          v-model="number"
          type="number"
          label="数字"
          left-icon="smile-o"
          right-icon="warning-o"
          placeholder="显示图标"
        />
        <!-- 输入密码 -->
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="带有清除按钮"
          clearable
        />
        <!-- 通过 button 插槽可以在输入框尾部插入按钮 -->
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <!-- 通过formatter属性可以对输入的内容进行格式化 -->
        <van-field
          v-model="value"
          label="字母"
          :formatter="formatter"
          placeholder="只能输入字母"
        />
      </div>
      <div class="field-textarea">
        <!-- 对于 textarea，可以通过autosize属性设置高度自适应 -->
        <!-- 设置maxlength和show-word-limit属性后会在底部显示字数统计 -->
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="100"
          placeholder="请输入留言"
          show-word-limit
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      tel: "",
      text: "",
      digit: "",
      number: "",
      password: "",
      sms: "",
      value: "",
      message: ""
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, "");
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
  padding: 0 20px;

  .wrap {
    background-color: #ffffff;
    .field-input {
    }
    .field-textarea {
      /deep/ .van-field__value {
        border: 1px solid #999;
        padding: 5px 10px;
      }
    }
  }
}
</style>
