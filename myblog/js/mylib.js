function $(id) {
	return document.getElementById(id);
}

function bind(elem, en, fn) {
	if (elem.addEventListener) {
		elem.addEventListener(en, fn);
	} else {
		elem.attachEvent('on' + en, fn);/*解决IE9以下的浏览器的兼容问题*/
	}
}

function unbind(elem, en, fn) {
	if (elem.removeEventListener) {
		elem.removeEventListener(en, fn);
	} else {
		elem.detachEvent('on' + en, fn);
	}
}
