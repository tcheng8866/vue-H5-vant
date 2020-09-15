/**
 * 判断是否为空
 * @returns {Boolean} 为空返回true
 */
export function validateNull(val) {
	if (val instanceof Array) {
		if (val.length === 0) return true
	} else if (val instanceof Object) {
		if (JSON.stringify(val) === '{}') return true
	} else {
		if (val === 'null' || val === 'undefined' || val === '') return true
		return false
	}
	return false
}

// 对象转字符串（objToStrEncodeURI、objToStr）
// var obj = {id: '11', name: '小明'}
// url转码（id=11&name=%E5%B0%8F%E6%98%8E）
export function objToStrEncodeURI(data) {
	let str = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		str += '&' + k + '=' + encodeURIComponent(value)
	}
	return str ? str.substring(1) : ''
}
// 对象转字符串（id=11&name=小明）
export function objToStr(data) {
	let str = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		str += '&' + k + '=' + value
	}
	return str ? str.substring(1) : ''
}
// (url查询参数)字符串转对象
// var str = '?name=张三& num=18&sum=110'
export function urlStrToObj(str) {
	var strTemp = str.replace('?', '')
	var arr = strTemp.split('&')
	var obj = {}
	for (var i in arr) {
		obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
	}
	return obj
}

// 生成2个数字之间的随机数（和顺序无关：1,3和3,1）
// randomNumBetweenTwo(1,3)
export function randomNumBetweenTwo(firstNum, upperValue) {
	return Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum);
}

// 中划线转驼峰（驼峰转下划线找不到分隔符）
// var str = 'get-elements-byclass-name'
export function middleLineToHump(str) {
	var con = str.split('-')
	var str = con[0]
	for (let i = 1; i < con.length; i++) {
		str += con[i][0].toUpperCase() + con[i].slice(1)
	}
	return str
}

// 判断对象数组是否一致（类似外卖平台 选规格的不同组合面板、存在递归可以比很复杂的数据、需要忽略的项目需要中间变量剔除掉）
var a = {
	name: 'aa',
	obj: {
		num: 1
	}
};
var b = {
	name: 'aa',
	obj: {
		num: 1
	}
};
console.log(diff(a, b));

export function diff(obj1, obj2) {
	var o1 = obj1 instanceof Object;
	var o2 = obj2 instanceof Object;
	if (!o1 || !o2) { /*  判断不是对象  */
		return obj1 === obj2;
	}
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
		// Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,
		// 例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr)) -> 0,1,2;
	}
	for (var attr in obj1) {
		var t1 = obj1[attr] instanceof Object;
		var t2 = obj2[attr] instanceof Object;
		if (t1 && t2) {
			// 递归调用
			return diff(obj1[attr], obj2[attr]);
		} else if (obj1[attr] !== obj2[attr]) {
			return false;
		}
	}
	return true;
}

// 删除对象自有属性、生成新对象
// let obj = {name: '奶茶', num: 20}
// objDelKey(obj, 'name')
// {num：20}
export function objDelKey(obj, attr) {
	let temp = Object.assign({}, obj)
	for (var key in temp) {
		if (temp.hasOwnProperty(key)) {
			if (key == attr) {
				delete temp[key]
			}
		}
	}
	return temp
}

// 日期默认值 20200824
// "2020-05-08 17:05:51" 使用 moment.js来处理时间（优）
// moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
export function getDefaultDate() {
  var currentTime = new Date()
  var y = currentTime.getFullYear()
  var m = currentTime.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = currentTime.getDate()
  d = d < 10 ? ('0' + d) : d
  return '' + y + m + d
}





