<template>
  <div class="component">
    <!-- 表单组件  可以监听change-->
    <div class="wrap">
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-divider>{{ radio }}</van-divider>
      <van-field name="checkbox" label="复选框">
        <template #input>
          <van-checkbox v-model="checkbox" shape="square" />
        </template>
      </van-field>
      <van-divider>{{ checkbox }}</van-divider>
      <van-field name="checkboxGroup" label="复选框组">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
            <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <van-divider>{{ checkboxGroup }}</van-divider>
      <!--switch开关： active-color属性表示打开时的背景色，inactive-color表示关闭时的背景色 -->
      <van-field name="switch" label="开关">
        <template #input>
          <van-switch v-model="switchChecked" size="20" />
        </template>
      </van-field>
      <van-divider>{{ switchChecked }}</van-divider>
      <!-- stepper步进器 支持输入、integer：仅输入整数、disable-input：禁用输入框 -->
      <van-field name="stepper" label="步进器">
        <template #input>
          <van-stepper v-model="stepper" step="2" min="5" max="8" integer />
        </template>
      </van-field>
      <van-divider>{{ stepper }}</van-divider>
      <!-- rate评分  支持自定义样式、allow-half：半星、count：自定义星数量、 -->
      <!-- disabled：禁用（灰色）、readonly：只读（黄色） -->
      <van-field name="rate" label="评分">
        <template #input>
          <van-rate v-model="rate" allow-half />
        </template>
      </van-field>
      <van-divider>{{ rate }}</van-divider>
      <!-- slider滑块  #button插槽支持自定义按钮、vertical：垂直 -->
      <van-field name="slider" label="滑块">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <van-divider>{{ slider }}</van-divider>
      <!-- uploader文件上传 -->
      <!-- 通过v-model可以绑定已经上传的文件列表，并展示文件列表的预览图 -->
      <!-- multiple 多图模式、部分安卓不支持 -->
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="fileList" multiple :after-read="afterRead" />
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      radio: '1',
      checkbox: false,
      checkboxGroup: [],
      switchChecked: false,
      stepper: 1,
      rate: 3.5,
      slider: 50,
      fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log('van-uploader', file);
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
	height: 100%;
    .field-input {
    }
  }
}
</style>
