<template>
  <div class="container">
    <div class="content">
		包裹类： container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block
		状态类： primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading
		尺寸类： large, middle, small, bigger, smaller
		组件类： card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog
		位置类： first, last, current, prev, next, forward, back
		文本类： title, desc, content, date, author, category，label，tag
		人物类： avatar, name, age, post, intro
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
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
	  str() {
		  var str="hello world!";
		  var substring = str.substring(3,7);    // 下标
		  var substr = str.substr(3,7);      // 长度 
	  },
	  // 循环遍历
	  loop() {
		  // 循环总结： 数组选map/for in；需要break选for 对象选for in ；重构格式选map
		  var array = [{id: 1, name: 'aa'}, {id: 2, name: 'bb'}];
		  var obj = {id: 999, name: 'objobj'};
		  // 循环数组
		  // 只支持数组、不改变原数组、看情况return、无法break
		  array.map(item=>{
			  console.log("map循环数组", item); 
		  })
		  let tt = array.map((item, index) =>{
			 return 10 + item.id * 2;
		  })					
		  // 只支持数组、可以break
		  for (var i = 0; i < array.length; i++) {  
			  console.log("for循环数组", i, array[i]);  
		  }  
		  // for in 循环对象数组都可以；
		  for (let key in obj) {  
			  console.log("for in循环对象", key, obj[key]);  
		  }; 
		  // 这个可以重构格式(两个不是同一个item)
		  let newArr = array.map(item => ({
            key: item.id,
            value: item.name
          })).filter(item => i.key == 1)
	  }
  }
};
</script>
<style scoped lang="less">
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fafafa; //灰色
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  .content {
    background-color: #ffffff;
    height: 100%;
  }
}
</style>
