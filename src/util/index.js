// 对象转字符串(encodeURIComponent转码看情况加)
// var obj = {id: '11', name: '小明'}
// objToStr(obj)
// "id=11&name=aaa"
export function objToStrEncodeURI(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}
// 对象转字符串
export function objToStr(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + value
	}
	return url ? url.substring(1) : ''
}

// (url查询参数)字符串转对象
// var str = '?name=张三& num=18&sum=110'
// urlStrToObj(str)
// {name: "张三", "num": "18", "sum": "110"}
export function urlStrToObj(str) {
	var strTemp = str.replace('?', '')
	var arr = strTemp.split('&')
	var obj = {}
	for (var i in arr) {
		obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
	}
	return obj
}

// 生成satrt-end之间的随机整数
// randomStartEnd(1,3)
// 结果范围 1/2/3
export function randomStartEnd(lowerValue, upperValue) {
	return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

// 生成n位不重复的数字
// getNonRepeatNumber(4)
export function getNonRepeatNumber(n) {
	var arr = []
	while (arr.length < n) {
		var num = Math.floor(Math.random() * 10) //取随机数
		if (arr.indexOf(num) == -1) { //去重
			arr.push(num)
		}
	}
	return arr.join('')
}

// 中划线转驼峰
// var str = 'get-elements-byclass-name'
// toHump(str)
export function toHump(str) {
	var con = str.split('-')
	var str = con[0]
	for (let i = 1; i < con.length; i++) {
		str += con[i][0].toUpperCase() + con[i].slice(1)
	}
	return str
}

// 判断对象数组是否一致（类似外卖平台 选规格的不同组合面板、存在递归可以比很复杂的数据、需要忽略的项目需要中间变量剔除掉）
// var a = {
// 	name: 'aa'
// };
// var b = {
// 	name: 'aa'
// };
// console.log(diff(a, b));

export function diff(obj1, obj2) {
	var o1 = obj1 instanceof Object;
	var o2 = obj2 instanceof Object;
	if (!o1 || !o2) { /*  判断不是对象  */
		return obj1 === obj2;
	}

	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
		//Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
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

// 浏览器(js)获取到的时间戳都是13位（毫秒值）
// new Date("Jun 2,2017 12:00:00"); //Fri Jun 02 2017 12:00:00 GMT+0800 (中国标准时间)
// new Date("Jun 2,2017"); //Fri Jun 02 2017 00:00:00 GMT+0800 (中国标准时间)
// new Date(2017,5,2,12,0,0); //Fri Jun 02 2017 12:00:00 GMT+0800 (中国标准时间)
// new Date(2017,5,2); //Fri Jun 02 2017 00:00:00 GMT+0800 (中国标准时间)
// new Date(1496376000000); //Fri Jun 02 2017 12:00:00 GMT+0800 (中国标准时间)    13位
function dateFormat() {
	// let date = new Date(parseInt(res.data.rows[i].time) * 1000);
	let date = new Date();
	console.log(date.length)
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	let d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	let h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	let minute = date.getMinutes();
	let second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	// "2020-05-08 17:05:51"
	return  y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

// 倒计时

var timestart = 30;
var timestep = -1;
var timeID;
function timecount() {
    document.getElementById("timeout").innerHTML = timestart;
    timestart += timestep;
    if(timestart < 0){
      timestart = 30;
      //倒计时为0时执行xxxx方法   
    }
    timeID=setTimeout("timecount()",1000);
}


