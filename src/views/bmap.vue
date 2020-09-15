<template>
  <div class="page">
    <div class="wrap">
      <p>
        wx环境：公众号接口wxGetLocation -err-> 腾讯地图getLocation -err->
        腾讯地图getIpLocation -succ-> 坐标转换wgs84ConverToBaidu
      </p>
      <p>非wx：百度地图浏览器定位(pc端无GPS模块，走默认ip定位)</p>
      <div class="content">
        <!-- 地图初始化 -->
        <baidu-map
          class="bm-view"
          ak="UN65YsvjLf7Lu85y3RKQtA7uaceLtPye"
          :pinch-to-zoom="true"
          :center="nearby.center"
          :zoom="15"
          @ready="initBmap"
        >
          <!-- 缩放控件 -->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
          <!-- 定位控件 -->
          <!-- <bm-geolocation
						anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
						:showAddressBar="true"
						:autoLocation="true"
						@locationSuccess="outPutLocation"
          ></bm-geolocation>-->
          <!-- 有bm-marker才能有bm-label、只能设置1px覆盖默认marker图标 -->
          <bm-marker v-if="geolocationOK" :position="bm_marker.point" :icon="bm_marker.icon">
            <bm-label
              :content="bm_label.content"
              :labelStyle="{ color: 'red', fontSize: '14px' }"
              :offset="{ width: -80, height: 10 }"
            />
          </bm-marker>
          <!-- 自驾 -->
          <bm-driving
            v-if="geolocationOK"
            :start="nearby.center"
            :end="bm_marker.point"
            :auto-viewport="true"
          ></bm-driving>
          <!-- 自驾调整视窗导致信息窗体失效 -->
          <!-- <bm-info-window v-if="geolocationOK" :position="bm_marker.point" :title="infoWindow.title" :show="infoWindow.show"
					 @close="infoWindowClose" @open="infoWindowOpen" :offset="{ width: 40, height: 70 }">
						<p v-text="infoWindow.contents"></p>
          </bm-info-window>-->
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BaiduMap,
  BmNavigation,
  BmGeolocation,
  BmMarker,
  BmLabel,
  BmInfoWindow,
  BmDriving
} from 'vue-baidu-map';

const BMAP_STATUS_SUCCESS = 0;

export default {
  mixins: [],
  components: {
    BaiduMap,
    BmNavigation,
    BmGeolocation,
    BmMarker,
    BmLabel,
    BmInfoWindow,
    BmDriving
  },
  props: {},
  data() {
    return {
      geolocation: null, // 腾讯地图
      hadSearch: false,
      geolocationOK: false,
      resultList: [],
      // 当前定位
      nearby: {
        center: {
          lng: 116.403981,
          lat: 39.916042
        },
        radius: 3000
      },
      // marker位置
      bm_marker: {
        point: {
          lng: 108.953077,
          lat: 34.229099
        },
        icon: {
          url: require('@/assets/image/logo.png'),
          size: {
            width: 1,
            height: 1
          }
        }
      },
      // marker标签
      bm_label: {
        content: '小寨'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.loadMapScript()
  },
  destroyed() {},
  methods: {
    initBmap({ BMap, map }) {
      if (this.$platform.isWechat) {
        this.getCurrentPos(r => {
          this.$set(this.nearby.center, 'lng', r.longitude)
          this.$set(this.nearby.center, 'lat', r.latitude)
          this.geolocationOK = true
        })
      } else {
        var geolocation = new BMap.Geolocation()
        geolocation.enableSDKLocation()
        geolocation.getCurrentPosition(
          r => {
            if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
              var mk = new BMap.Marker(r.point)
              map.addOverlay(mk)
              map.panTo(r.point)
              this.nearby.center.lng = r.point.lng
              this.nearby.center.lat = r.point.lat
            } else {
              console.log('获取定位失败！')
            }
            this.geolocationOK = true
          },
          {
            enableHighAccuracy: true
          }
        )
      }
    },
    getCurrentPos(callback) {
      this.wxGetLocation()
        .then(r => {
          return this.wgs84ConverToBaidu(r.lat, r.lng)
        })
        .then(r1 => {
          callback && callback(r1)
        })
        .catch(() => {
          this.geolocation.getLocation(
            t => {
              this.wgs84ConverToBaidu(t.lat, t.lng).then(t1 => {
                callback && callback(t1)
              })
            },
            m => {
              this.geolocation.getIpLocation(
                s => {
                  this.wgs84ConverToBaidu(s.lat, s.lng).then(s1 => {
                    callback && callback(s1)
                  })
                },
                () => {
                  console.log('getIpLocation error 所有定位都失败')
                }
              )
            },
            {
              timeout: 10000
            }
          )
        })
    },
    /**
     * 微信获取定位数据
     * @return {[promise]}
     */
    wxGetLocation() {
      return new Promise((resolve, reject) => {
        wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: res => {
            resolve({
              lat: res.latitude,
              lng: res.longitude
            })
          },
          fail: () => {
            reject()
          },
          cancel: () => {
            reject()
          }
        })
      })
    },
    /**
     * 火星坐标系（腾讯）转百度坐标
     * @return {[promise]}
     */
    wgs84ConverToBaidu(lat, lng) {
      return new Promise((resolve, reject) => {
        jsonp({
          url:
            'http://api.map.baidu.com/geoconv/v1/?coords=' +
            lng +
            ',' +
            lat +
            '&from=1&to=5&ak=x7weekL5BrZISrSgMl0swHR2jDxUiZYO',
          success: res => {
            if (res.result) {
              resolve({
                longitude: res.result[0].x,
                latitude: res.result[0].y
              });
            } else {
              reject()
            }
          }
        })
      })
    },
    /**
     * 加载腾讯地图
     * @return {[promise]}
     */
    loadMapScript() {
      const _this = this
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        '//apis.map.qq.com/tools/geolocation/min?key=GIPBZ-S6M3F-SC6JD-NXREU-YAZ6E-5PB6Y&referer=myapp'
      // 文件加载成功后的回调
      if (script.addEventListener) {
        script.addEventListener(
          'load',
          function() {
            setTimeout(() => {
              _this.geolocation = new qq.maps.Geolocation();
            }, 500)
          },
          false
        );
      } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function() {
          var target = window.event.srcElement
          if (target.readyState == 'loaded') {
            setTimeout(() => {
              _this.geolocation = new qq.maps.Geolocation()
            }, 500)
          }
        })
      }
      document.body.appendChild(script)
    },
    // 信息窗体
    infoWindowClose(e) {
      this.infoWindow.show = false
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true
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
    .head {
      text-align: left;
    }
    .content {
      .bm-view {
        width: 100%;
        height: 375px;
      }
    }
  }
}

/deep/ .navtrans-view a {
  display: none;
}
</style>
