<template>
  <div class="page">
    <div class="wrap"><vant-basic></vant-basic></div>
  </div>
</template>

<script>
import vantBasic from '@/components/vant-basic.vue';

export default {
  mixins: [],
  components: { vantBasic },
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
