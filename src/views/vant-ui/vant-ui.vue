<template>
  <div class="vant-ui"><router-view></router-view></div>
</template>

<script>
export default {
  name: "vant",
  methods: {},
  beforeRouteEnter(to, from, next) {
    next(); // 深坑：不放 next 默认拦截所以下级路由
    console.log("vant-ui");
  },
  created() {
	  console.log('prototype：', this.$appName)
  }
};
</script>

