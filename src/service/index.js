/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import originJSONP from 'jsonp'

import {
	Toast
} from 'vant';

import API from './api.js'
import {
	param
} from '@/util/index.js'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = 'http://api.development.com/';
} else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = 'http://api.production.com/';
}
// 请求超时时间
axios.defaults.timeout = 100000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器（初始化时执行）
axios.interceptors.request.use(
	config => {
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
					console.log("401: 未登录")
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
}
/** 
 * axios不支持jsonp请求
 * jsonp方法，对应jsonp请求 
 * @param {String} url [请求的url地址] 
 */
export function jsonp(url, data, option) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
	
	return new Promise(function(resolve, reject) {
		originJSONP(url, option, function(err, data) {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}
