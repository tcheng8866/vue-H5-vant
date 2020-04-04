/**
 * 获取当前页面运行的平台
 * @type {[type]}
 */
const ua = navigator.userAgent.toLowerCase()

const isWechat = () => ua.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/wxwork/i) != 'wxwork' // 是否微信
const isAndroid = () => ua.indexOf('native') > -1 // 是否安卓
const isIos = () => ua.indexOf('native') > -1// 是否IOS
const isIpad = () => ua.indexOf('native') > -1// 是否Ipad

export default {
  ua: ua,
  isWechat: isWechat(),
  isAndroid: isAndroid(),
  isIos: isIos(),
  isIpad: isIpad(),
}
