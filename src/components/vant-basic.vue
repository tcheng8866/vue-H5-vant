<template>
  <div class="component">
    <!-- 基础组件 -->
    <div class="wrap">
      <div class="button">
        <!-- plain：朴素; square：方形，无倒角; round：椭圆；hairline：0.5px边框；size: (large small mini) -->
        <van-button icon="star-o" type="primary">按钮</van-button>
        <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info"
          >按钮</van-button
        >
        <van-button color="#7232dd" plain square>单色按钮</van-button>
        <van-button
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          round
          block
          >渐变色按钮</van-button
        >
      </div>
      <div class="cell">
        <!--van-cell-group：包裹van-cell后，提供外边框；-->
        <!-- center：Cell的左右内容都垂直居中、通过CellGroup的title属性可以指定分组标题、 -->
        <!-- is-link：展示箭头；arrow-direction="down"：箭头方向向下  -->
        <!-- 插槽内容在左侧 、替换title、label也就失效了-->
        <van-cell is-link>展示弹出层</van-cell>
        <van-cell
          center
          title="单元格"
          value="内容"
          label="描述信息"
          is-link
          arrow-direction="down"
        />
        <van-cell-group title="分组1"
          ><van-cell title="单元格" value="内容"
        /></van-cell-group>
        <van-cell-group title="分组2"
          ><van-cell title="单元格" value="内容"
        /></van-cell-group>
      </div>
      <div class="icon">
        <van-icon name="location-o" />
        <van-icon name="chat-o" dot />
        <van-icon name="chat-o" badge="9" />
        <van-icon name="chat-o" badge="99+" />
        <van-icon name="chat-o" color="#1989fa" />
        <van-icon name="chat-o" size="40" />
      </div>
      <div class="image">
        <!-- loading-icon="photo-o"：自定义(本地、网络请求)占位vant图标、rror-icon="warning-o": 自定义(网络请求)失败时图标-->
        <!-- 在 .vue 文件中通过相对路径引用本地图片时，图片的链接外包上一层 require()，将图片 URL 转换为 webpack 模块请求 -->
        <!-- 默认16px = 1rem、 蓝湖复制px,手动转换rem(1:16) -->
        <van-image
          width="10rem"
          height="100"
          loading-icon="setting"
          lazy-load
          :src="require('@/assets/image/big.jpg')"
        />
        <!-- 使用lazy-load 需要main.js先引入 -->
        <!-- 懒加载：网页首先用一张轻量级的图片占位，当占位图片被拖动到视窗，瞬间加载目标图片，然后替换占位图片 -->
        <van-image
          width="100"
          height="100"
          lazy-load
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="row">
        <!-- 共24格 offset:偏移、 gutter="20"：设置列间距、支持flex布局-->
        <van-row gutter="20">
          <van-col span="6">span: 6</van-col>
          <van-col span="6">span: 6</van-col>
          <van-col span="6">span: 6</van-col>
          <van-col span="6">span: 6</van-col>
        </van-row>
        <!-- space-around: around四周; space-between: 最两侧，间隙都在中间-->
        <van-row gutter="20" type="flex" justify="space-between">
          <van-col span="6">span: 6</van-col>
          <van-col span="6">span: 6</van-col>
        </van-row>
      </div>
      <div class="popup">
        <!-- position:弹出位置；round:圆角；closeable：是否显示关闭； -->
        <van-popup
          v-model="show"
          position="center"
          round
          closeable
          :style="{ width: '80%', height: '50%' }"
          >内容</van-popup
        >
      </div>
      <div class="ellipsis">
        <!-- van-ellipsis最多显示一行 、van-multi-ellipsis--l2最多显示两行、van-multi-ellipsis--l3最多显示三行-->
        <div class="van-ellipsis">
          这是一段最多显示一行的文字，多余的内容会被省略。
        </div>
        <div class="van-multi-ellipsis--l2">
          这是一段最多显示两行的文字，多余的内容会被省略；这是一段最多显示两行的文字，多余的内容会被省略
        </div>
      </div>
      <div class="hairline">
        <div class="van-hairline--top">上边框</div>
        <div class="van-hairline--bottom">下边框</div>
        <div class="van-hairline--left">左边框</div>
        <div class="van-hairline--right">右边框</div>
        <div class="van-hairline--top-bottom">上下边框</div>
        <div class="van-hairline--surround">全边框</div>
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
      show: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
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
    .button {
      button {
        margin: 12px 10px;
      }
      .van-button--block {
        margin: 12px 0;
      }
    }
    .cell {
      text-align: left;
    }
    .icon {
      font-size: 32px;
    }
    .row {
      /deep/ .van-row {
        margin: 0 0 10px 0 !important;
        .van-col {
          line-height: 30px;
          // nth-child(1) 可传入1.2.3....   默认号从序1开始
          &:nth-child(odd) {
            background-color: #39a9ed;
          }
          &:nth-child(even) {
            background-color: red;
          }
        }
      }
              .van-row--flex {
          .van-col {
            background-clip: content-box;
          }
        }
    }
    .ellipsis {
      text-align: left;
      div {
        margin: 10px 0;
      }
    }
    .hairline {
      div {
        display: inline-block;
        padding: 10px;
        &:after {
          border-color: red;
        }
      }
    }
  }
}
</style>
