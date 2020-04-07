<template>
  <div class="page">
    <div class="wrap">
      <van-tabs v-model="active">
        <van-tab title="vant-field"><vant-field></vant-field></van-tab>
        <van-tab title="vant-form"><vant-form></vant-form></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import vantField from "@/components/vant-field.vue";
import vantForm from "@/components/vant-form.vue";

export default {
  name: "",
  mixins: [],
  components: { vantField, vantForm },
  props: {},
  data() {
    return {
      active: 0
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
  }
}
</style>
