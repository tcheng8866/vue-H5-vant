/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import originJSONP from 'jsonp'
import { Toast } from 'vant';
import API from './api.js'
import { objToStr } from '@/util/index.js'

// 环境的切换
// 模式是Vue CLI项目中的一个重要概念。默认情况下，Vue CLI项目中有三种模式：
// development：在vue-cli-service serve下，即开发环境使用
// production：在vue-cli-service build 和vue-cli-service test:e2e下，即正式环境使用
// test： 在vue-cli-service test:unit下使用,

// 配置后请求路径（代理前）
// 开发环境:http://localhost:8080/api/xxx   （vue.config.js中的devServer.host）
// 生产环境 http://baidu.com/xxx
if (process.env.NODE_ENV == 'development') {
	// npm run serve
	axios.defaults.baseURL = '/api/';
} else if (process.env.NODE_ENV == 'production') {
	// npm run build
	axios.defaults.baseURL = '/';
}
console.log('环境配置process', process)

// 请求超时时间
axios.defaults.timeout = 100000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器（初始化时执行）
axios.interceptors.request.use(
	config => {
		console.log('axios', config)
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	// 服务器状态码不是200的情况
	error => {
		if (error.response.status) {
			switch (error.response.status) {
				// 401: 未登录
				case 401:
					console.log('401: 未登录')
					// window.location.hash = '/user/smslogin'
					break;
				case 404:
					Toast({
						message: '网络请求不存在',
						duration: 1500,
						forbidClick: true
					});
					break;
				// 其他错误，直接抛出错误提示
				default:
					Toast({
						message: error.response.data.message,
						duration: 1500,
						forbidClick: true
					});
			}
			return Promise.reject(error.response);
		}
	}
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		const [key1, key2] = url.split('/')
		const urlParse = API[key1][key2]
		axios.post(urlParse, QS.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
	// axios已经对promise做了封装, 尽量不做再次处理减少开销
	// axios({
	// 	method: 'post',
	// 	url: urlParse,
	// 	data: params
	// });
}

// async/await是写异步代码的新方式，以前的方法有回调函数和Promise。
// async/await是基于Promise实现的，它不能用于普通的回调函数。
// async/await与Promise一样，是非阻塞的。
// async/await使得异步代码看起来像同步代码，这正是它的魔力所在。

// 用promise封装 jsonp 使其支持async/await写法

/**
 * axios不支持jsonp请求
 * jsonp方法，对应jsonp请求
 * @param {String} url [请求的url地址]
 */
export function jsonp(url, data, option) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + objToStr(data)
	return new Promise(function (resolve, reject) {
		originJSONP(url, option, function (err, data) {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}
