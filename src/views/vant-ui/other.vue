<template>
  <div class="page">
    <div class="wrap"><vant-other></vant-other></div>
  </div>
</template>

<script>
import vantOther from '@/components/vant-other.vue';

export default {
  mixins: [],
  components: { vantOther },
  props: {},
  data() {
    return {};
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
