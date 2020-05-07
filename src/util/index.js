/* 
 * 对象转字符串拼接
 */
export function objToStr(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}

/* 
 * 生成satrt-end之间的随机数
 */
export function randomStartEnd(lowerValue, upperValue) {
	return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
