<template>
  <div class="page">
    <div class="wrap">
      <van-field v-model="basciValue" label="vuex测试" input-align="right" />
      <!-- <input v-model="basciValue"/> -->
      <van-button type="primary" @click="clickBtn()">按钮</van-button>
      <van-divider>localStorage</van-divider>
      <div v-html="localStorage"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      basciValue: ""
    };
  },
  computed: {
    ...mapState({
      vantUiBasciInfo: state => state.vantUi.vantUiBasciInfo || {},
      vantUiFormInfo: state => state.vantUi.vantUiFormInfo || {}
    })
  },
  watch: {},
  created() {
    this.basciValue = this.vantUiBasciInfo.basciValue;
    this.localStorage = window.localStorage.getItem("vantUi");
  },
  mounted() {},
  destroyed() {},
  methods: {
    clickBtn() {
      this.vantUiBasciInfo.basciValue = this.basciValue;
      this.$store.dispatch("setVantUiBasciInfo", this.vantUiBasciInfo);
      // dispatch是异步、需要等待下一次刷线dom才能触发、使用$nextTick、setTimeout也处理不了
      this.localStorage = window.localStorage.getItem("vantUi");
      this.$forceUpdate();
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
