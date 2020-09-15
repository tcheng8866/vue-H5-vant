<template>
  <div class="page">
    <div class="wrap">
      <p>axios未提供jsonp封装；</p>
      <p>npm的jsonp模块、或者document.createElement('script')封装</p>
      <van-field v-model="tel" label="手机号码" placeholder="jsonp测试" />
      <van-button type="primary" @click="clickAwait()">jsonp</van-button>
      <van-button type="primary" @click="clickPost()">api封装</van-button>
      <van-button type="primary" @click="clickProxy()">proxy</van-button>
      <van-panel title="手机号查询" desc status="jsonp">{{ resText }}</van-panel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      tel: 18702906728,
      resText: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
	  // async await写法(函数是promise才能用)
    async clickAwait() {
      try {
        const res = await this.$jsonp(
          'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm',
          {
            tel: this.tel
          }
        )
        if (res) {
          this.resText = res
        }
      } catch (e) {
        this.resText = e
      }
    },
	  // promise 写法
    clickPromise() {
      const res = this.$jsonp(
        'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm',
        {
          tel: this.tel
        }
      )
      .then(res => {
        this.resText = res
      })
      .catch(err => {
        this.resText = err
      })
    },
	  // 测试 api  post
    async clickPost() {
      try {
        const res = await this.$post(
          'modules/interface',
          {
            tel: this.tel
          }
        )
        if (res) {
          this.resText = res
        }
      } catch (e) {
        this.resText = e
      }
    },
    // 测试 proxy
    async clickProxy() {
      try {
        const res = await this.$post(
          'modules/proxy',
          {
            tel: this.tel
          }
        )
        if (res) {
          this.resText = res
        }
      } catch (e) {
        this.resText = e
      }
    }
  }
}
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
    padding: 0 15px;
    p {
      text-align: left;
    }
    /deep/ .van-field__label {
      line-height: 40px;
    }
    /deep/ .van-field__control {
      border: 1px solid #999;
      height: 40px;
      padding: 5px 10px;
    }
	/deep/ .van-button {
		margin: 0 10px;
	}
  }
}
</style>
