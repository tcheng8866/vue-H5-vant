<template>
  <div class="page">
    <div class="wrap">
		<w-input label="姓名" value="aa" maxlength="10" type="text" placeholder="aa" disabled="false" ></w-input>
	</div>
  </div>
</template>

<script>
import {wInput} from 'comp-wrap'
export default {
  name: "",
  mixins: [],
  components: {wInput},
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
