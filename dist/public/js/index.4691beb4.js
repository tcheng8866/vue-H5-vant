(function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={index:0},r={index:0},i=[];function c(t){return s.p+"public/js/"+({}[t]||t)+"."+{"chunk-65cafaaa":"9463b0ef","chunk-744a21f8":"dc0f1a71","chunk-e124bb00":"700fff07"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-65cafaaa":1,"chunk-744a21f8":1,"chunk-e124bb00":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="public/css/"+({}[t]||t)+"."+{"chunk-65cafaaa":"d4045c08","chunk-744a21f8":"1289c777","chunk-e124bb00":"c08cde55"}[t]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,n[1](f)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a8f":function(t,e,n){"use strict";var o=n("6592"),a=n.n(o);a.a},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("vuex")]),t._v(" | "),n("router-link",{attrs:{to:"/axios"}},[t._v("axios")]),t._v(" | "),n("router-link",{attrs:{to:"/bmap"}},[t._v("bmap")]),t._v(" | "),n("router-link",{attrs:{to:"/wx"}},[t._v("wx")]),t._v(" | "),n("router-link",{attrs:{to:"/vantUi/basic"}},[t._v("basic")]),t._v(" | "),n("router-link",{attrs:{to:"/vantUi/form"}},[t._v("form")]),t._v(" | "),n("router-link",{attrs:{to:"/vantUi/other"}},[t._v("other")])],1),n("router-view")],1)},r=[],i={name:"",mixins:[],components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){var t=this.$platform.ua;console.log("userAgent设备信息",t),this.$platform.isWechat&&this.setWeiXinJSConfig()},mounted:function(){},destroyed:function(){},methods:{setWeiXinJSConfig:function(){console.log("wx微信",wx),wx.config({debug:!0,appId:this.$APPID_PAY10086,timestamp:"",nonceStr:"",signature:"",jsApiList:["updateAppMessageShareData","getLocation","scanQRCode","getNetworkType"]})}}},c=i,s=(n("7c55"),n("2877")),u=Object(s["a"])(c,a,r,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"wrap"},[n("van-field",{attrs:{label:"vuex测试","input-align":"right"},model:{value:t.basciValue,callback:function(e){t.basciValue=e},expression:"basciValue"}}),n("van-button",{attrs:{type:"primary"},on:{click:function(e){return t.clickBtn()}}},[t._v("按钮")]),n("van-divider",[t._v("localStorage")]),n("div",{domProps:{innerHTML:t._s(t.localStorage)}})],1)])},d=[],m=n("5530"),v=n("2f62"),h={name:"",mixins:[],components:{},props:{},data:function(){return{basciValue:""}},computed:Object(m["a"])({},Object(v["b"])({vantUiBasciInfo:function(t){return t.vantUi.vantUiBasciInfo||{}},vantUiFormInfo:function(t){return t.vantUi.vantUiFormInfo||{}}})),watch:{},created:function(){this.basciValue=this.vantUiBasciInfo.basciValue,this.localStorage=window.localStorage.getItem("vantUi")},mounted:function(){},destroyed:function(){},methods:{clickBtn:function(){this.vantUiBasciInfo.basciValue=this.basciValue,this.$store.dispatch("setVantUiBasciInfo",this.vantUiBasciInfo),this.localStorage=window.localStorage.getItem("vantUi"),this.$forceUpdate()}}},g=h,b=(n("0a8f"),Object(s["a"])(g,p,d,!1,null,"03853b74",null)),w=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"wrap"},[n("p",[t._v("axios未提供jsonp封装；")]),n("p",[t._v("npm的jsonp模块、或者document.createElement('script')封装")]),n("van-field",{attrs:{label:"手机号码",placeholder:"jsonp测试"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),n("van-button",{attrs:{type:"primary"},on:{click:function(e){return t.clickAwait()}}},[t._v("jsonp请求")]),n("van-panel",{attrs:{title:"手机号查询",desc:"",status:"jsonp"}},[t._v(t._s(t.resText))])],1)])},x=[],_=(n("96cf"),n("1da1")),k={name:"",mixins:[],components:{},props:{},data:function(){return{tel:18702906728,resText:"https://tcc.taobao.com/cc/json/mobile_tel_segment.htm"}},computed:{},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{clickAwait:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$jsonp("https://tcc.taobao.com/cc/json/mobile_tel_segment.htm",{tel:t.tel});case 3:n=e.sent,n&&(t.resText=n),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.resText=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},clickPromise:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$jsonp("https://tcc.taobao.com/cc/json/mobile_tel_segment.htm",{tel:t.tel}).then((function(e){t.resText=e})).catch((function(e){t.resText=e}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},j=k,B=(n("9f35"),Object(s["a"])(j,y,x,!1,null,"8723584c",null)),O=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"wrap"},[n("p",[t._v(" wx环境：公众号接口wxGetLocation -err-> 腾讯地图getLocation -err-> 腾讯地图getIpLocation -succ-> 坐标转换wgs84ConverToBaidu ")]),n("p",[t._v("非wx：百度地图浏览器定位(pc端无GPS模块，走默认ip定位)")]),n("div",{staticClass:"content"},[n("baidu-map",{staticClass:"bm-view",attrs:{ak:"UN65YsvjLf7Lu85y3RKQtA7uaceLtPye","pinch-to-zoom":!0,center:t.nearby.center,zoom:15},on:{ready:t.initBmap}},[n("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),t.geolocationOK?n("bm-marker",{attrs:{position:t.bm_marker.point,icon:t.bm_marker.icon}},[n("bm-label",{attrs:{content:t.bm_label.content,labelStyle:{color:"red",fontSize:"14px"},offset:{width:-80,height:10}}})],1):t._e(),t.geolocationOK?n("bm-driving",{attrs:{start:t.nearby.center,end:t.bm_marker.point,"auto-viewport":!0}}):t._e()],1)],1)])])},C=[],I=(n("d81d"),n("d3b7"),n("bd0c")),S=0,P={name:"",mixins:[],components:{BaiduMap:I["BaiduMap"],BmNavigation:I["BmNavigation"],BmGeolocation:I["BmGeolocation"],BmMarker:I["BmMarker"],BmLabel:I["BmLabel"],BmInfoWindow:I["BmInfoWindow"],BmDriving:I["BmDriving"]},props:{},data:function(){return{geolocation:null,hadSearch:!1,geolocationOK:!1,resultList:[],nearby:{center:{lng:116.403981,lat:39.916042},radius:3e3},bm_marker:{point:{lng:108.953077,lat:34.229099},icon:{url:n("a1d8"),size:{width:1,height:1}}},bm_label:{content:"小寨"}}},computed:{},watch:{},created:function(){},mounted:function(){this.loadMapScript()},destroyed:function(){},methods:{initBmap:function(t){var e=this,n=t.BMap,o=t.map;if(this.$platform.isWechat)this.getCurrentPos((function(t){e.$set(e.nearby.center,"lng",t.longitude),e.$set(e.nearby.center,"lat",t.latitude),e.geolocationOK=!0}));else{var a=new n.Geolocation;a.enableSDKLocation(),a.getCurrentPosition((function(t){if(a.getStatus()==S){var r=new n.Marker(t.point);o.addOverlay(r),o.panTo(t.point),e.nearby.center.lng=t.point.lng,e.nearby.center.lat=t.point.lat}else console.log("获取定位失败！");e.geolocationOK=!0}),{enableHighAccuracy:!0})}},getCurrentPos:function(t){var e=this;this.wxGetLocation().then((function(t){return e.wgs84ConverToBaidu(t.lat,t.lng)})).then((function(e){t&&t(e)})).catch((function(){e.geolocation.getLocation((function(n){e.wgs84ConverToBaidu(n.lat,n.lng).then((function(e){t&&t(e)}))}),(function(n){e.geolocation.getIpLocation((function(n){e.wgs84ConverToBaidu(n.lat,n.lng).then((function(e){t&&t(e)}))}),(function(){console.log("getIpLocation error 所有定位都失败")}))}),{timeout:1e4})}))},wxGetLocation:function(){return new Promise((function(t,e){wx.getLocation({type:"wgs84",success:function(e){t({lat:e.latitude,lng:e.longitude})},fail:function(){e()},cancel:function(){e()}})}))},wgs84ConverToBaidu:function(t,e){return new Promise((function(n,o){jsonp({url:"http://api.map.baidu.com/geoconv/v1/?coords="+e+","+t+"&from=1&to=5&ak=x7weekL5BrZISrSgMl0swHR2jDxUiZYO",success:function(t){t.result?n({longitude:t.result[0].x,latitude:t.result[0].y}):o()}})}))},loadMapScript:function(){var t=this,e=document.createElement("script");e.type="text/javascript",e.src="//apis.map.qq.com/tools/geolocation/min?key=GIPBZ-S6M3F-SC6JD-NXREU-YAZ6E-5PB6Y&referer=myapp",e.addEventListener?e.addEventListener("load",(function(){setTimeout((function(){t.geolocation=new qq.maps.Geolocation}),500)}),!1):e.attachEvent&&e.attachEvent("onreadystatechange",(function(){var e=window.event.srcElement;"loaded"==e.readyState&&setTimeout((function(){t.geolocation=new qq.maps.Geolocation}),500)})),document.body.appendChild(e)},infoWindowClose:function(t){this.infoWindow.show=!1},infoWindowOpen:function(t){this.infoWindow.show=!0}}},T=P,L=(n("fb1a"),Object(s["a"])(T,U,C,!1,null,"15be314f",null)),$=L.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"wrap"},[n("p",[t._v("需要用户触发的，不必放在wx.ready()方法中;")]),n("p",[t._v(" 若需要页面加载时就执行的话，如分享接口，就必须放在wx.ready()方法中执行 ")]),n("p",[t._v("wx开发作者工具查看：")]),n("van-button",{attrs:{type:"primary"},on:{click:function(e){return t.getNetworkType()}}},[t._v("网络状态")]),n("van-button",{attrs:{type:"primary"},on:{click:function(e){return t.getLocation()}}},[t._v("地理位置")]),n("van-divider",[t._v(t._s(t.networkType))]),n("van-divider",[t._v("lng: "+t._s(t.longitude)+", lat: "+t._s(t.latitude))])],1)])},A=[],M={name:"",mixins:[],components:{},props:{},data:function(){return{networkType:"",longitude:"",latitude:""}},computed:{},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{getNetworkType:function(){var t=this;wx.getNetworkType({success:function(e){t.networkType=e.networkType}})},getLocation:function(){var t=this;wx.getLocation({success:function(e){t.longitude=e.longitude,t.latitude=e.latitude},cancel:function(t){console.log("用户拒绝授权获取地理位置")}})}}},N=M,V=(n("9054"),Object(s["a"])(N,E,A,!1,null,"173fe078",null)),R=V.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vant-ui"},[n("router-view")],1)},W=[],D={name:"vant",methods:{},beforeRouteEnter:function(t,e,n){n(),console.log("vant-ui")},created:function(){console.log("prototype：",this.$appName)}},F=D,q=Object(s["a"])(F,G,W,!1,null,null,null),K=q.exports,J=function(){return n.e("chunk-e124bb00").then(n.bind(null,"0067"))},H=function(){return n.e("chunk-65cafaaa").then(n.bind(null,"d8f9"))},Y=function(){return n.e("chunk-744a21f8").then(n.bind(null,"381b"))},z=[{path:"basic",name:"vantUiBasic",component:J,meta:{title:"基础"}},{path:"form",name:"vantUiForm",component:H,meta:{title:"表单"}},{path:"other",name:"vantUiOther",component:Y,meta:{title:"其他"}}],X=z;o["a"].use(f["a"]);var Z=[{path:"/",name:"default",component:w},{path:"/",name:"vuex",component:w},{path:"/axios",name:"axios",component:O},{path:"/bmap",name:"bmap",component:$},{path:"/wx",name:"wx",component:R},{path:"/vantUi",component:K,children:X}],Q=new f["a"]({routes:Z}),tt=Q,et=(n("4160"),n("b64b"),n("159b"),function(t){t.subscribe((function(t,e){Object.keys(e).forEach((function(t,n){window.localStorage.setItem(t,JSON.stringify(e[t]))}))}))}),nt=[et],ot=localStorage.getItem("vantUi")&&JSON.parse(localStorage.getItem("vantUi"))||{},at={vantUiBasciInfo:ot.vantUiBasciInfo,vantUiFormInfo:ot.vantUiFormInfo},rt={setVantUiBasciInfo:function(t,e){t.vantUiBasciInfo=e}},it={setVantUiBasciInfo:function(t,e){var n=t.commit;n("setVantUiBasciInfo",e)},setVantUiFormInfo:function(t,e){var n=t.commit;n("setVantUiFormInfo",e)}},ct={state:at,mutations:rt,actions:it};o["a"].use(v["a"]);var st=new v["a"].Store({modules:{vantUi:ct},plugins:nt}),ut=(n("7371"),n("c975"),n("ac1f"),n("1276"),n("3835")),lt=n("bc3a"),ft=n.n(lt),pt=n("4328"),dt=n.n(pt),mt=n("f2e8"),vt=n.n(mt),ht=n("d399"),gt={modules:{interface:"/serve/api/auth/modules/interface"},v1:{batch:"v1/ipv4/batch"}};function bt(t){var e="";for(var n in t){var o=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(o)}return e?e.substring(1):""}function wt(t,e){return new Promise((function(n,o){ft.a.get(t,{params:e}).then((function(t){n(t.data)})).catch((function(t){o(t.data)}))}))}function yt(t,e){return new Promise((function(n,o){var a=t.split("/"),r=Object(ut["a"])(a,2),i=r[0],c=r[1],s=gt[i][c];ft.a.post(s,dt.a.stringify(e)).then((function(t){n(t.data)})).catch((function(t){o(t.data)}))}))}function xt(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+bt(e),new Promise((function(e,o){vt()(t,n,(function(t,n){t?o(t):e(n)}))}))}ft.a.defaults.baseURL="http://api.production.com/",ft.a.defaults.timeout=1e5,ft.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",ft.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.error(t)})),ft.a.interceptors.response.use((function(t){return 200===t.status?Promise.resolve(t):Promise.reject(t)}),(function(t){if(t.response.status){switch(t.response.status){case 401:console.log("401: 未登录");break;case 404:Object(ht["a"])({message:"网络请求不存在",duration:1500,forbidClick:!0});break;default:Object(ht["a"])({message:t.response.data.message,duration:1500,forbidClick:!0})}return Promise.reject(t.response)}}));n("466d");var _t=navigator.userAgent.toLowerCase(),kt=function(){return"micromessenger"==_t.match(/MicroMessenger/i)&&"wxwork"!=_t.match(/wxwork/i)},jt=function(){return _t.indexOf("native")>-1},Bt=function(){return _t.indexOf("native")>-1},Ot=function(){return _t.indexOf("native")>-1},Ut={ua:_t,isWechat:kt(),isAndroid:jt(),isIos:Bt(),isIpad:Ot()},Ct=function(t,e){t.prototype.$get=wt,t.prototype.$post=yt,t.prototype.$jsonp=xt,t.prototype.$platform=Ut,t.prototype.$appName="vant-prj",t.prototype.$appName="vant-prj",t.prototype.$APPID_PAY10086="wx3aaa7500ba3b7178",t.prototype.$reg={phone:/^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/,idCard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/}},It=Ct,St=n("b970"),Pt=(n("157a"),n("283e")),Tt=n.n(Pt),Lt=n("3a34"),$t=n.n(Lt);o["a"].use(It),o["a"].use(St["a"]),o["a"].use(Tt.a,{error:n("c0e6"),loading:n("f1c7")});var Et=new $t.a;o["a"].use(Et),o["a"].config.productionTip=!1,new o["a"]({router:tt,store:st,render:function(t){return t(l)}}).$mount("#app")},6592:function(t,e,n){},7371:function(t,e,n){},"7c55":function(t,e,n){"use strict";var o=n("2395"),a=n.n(o);a.a},8789:function(t,e,n){},9054:function(t,e,n){"use strict";var o=n("9d3b"),a=n.n(o);a.a},"9d3b":function(t,e,n){},"9f35":function(t,e,n){"use strict";var o=n("8789"),a=n.n(o);a.a},a1d8:function(t,e,n){t.exports=n.p+"public/img/logo.82b9c7a5.png"},c0e6:function(t,e,n){t.exports=n.p+"public/img/error.d2677c4f.png"},f1c7:function(t,e,n){t.exports=n.p+"public/img/loading.2986c54b.gif"},fb1a:function(t,e,n){"use strict";var o=n("ffe0"),a=n.n(o);a.a},ffe0:function(t,e,n){}});
//# sourceMappingURL=index.4691beb4.js.map