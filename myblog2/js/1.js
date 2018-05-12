
/**
 *缓存：牺牲空间换取时间，优化代码
 */

var cache={};
function $(id){
	if(!cache[id]){
		cache[id]=document.getElementById(id);
	}
	return cache[id];
}

/**
 * 处理事件对象
 */
function handleEvent(evt){
	evt=evt||event;
	//阻止事件默认行为
	evt.preventDefault()=evt.preventDefault()||
		function(){
			this.returnValue=false;
		};
		//阻止事件传播
	evt.stopPropagation()=evt.stopPropagation()||
		function(){
			this.cancelBubble=true;
		};
	return evt;
}

/**
 * 获取元素的只读样式
 * @param {Object} elem
 */
function getStyle(elem){
	return window.getComputedStyle?window.getComputedStyle(elem):
	elem.currentStyle;
}
//绑定事件回调函数(元素，事件，函数)
function bind(elem,en,fn){
	if(elem.addEventListener){
//addEventListener方法的第三个参数表示事件处理方式
//true--事件捕获(capture)-从外向里传播事件
//false--事件冒泡(bubble)--从里向外传播事件
		elem.addEventListener(en,fn);
	}else{
		elem.attachEvent('on'+en,fn);
	}
}
/**
 * 将使用了固定定位的元素变成可拖拽元素
 * @param {Object} elem 使用了固定定位的元素
 */

function make(elem){

	bind(elem,'mousedown',function(evt){
		evt=evt||window.event;
		elem.isMouseDown=true;
		var divStyle=getStyle(elem);
		elem.originLeft=parseInt(divStyle.left);
		elem.originTop=parseInt(divStyle.top);
		elem.mouseX=evt.clientX;
		elem.mouseY=evt.clientY;
	});
	
	bind(elem,'mouseup',function(){
		elem.isMouseDown=false;
	});
	bind(elem,'mouseout',function(){
		elem.isMouseDown=false;
	});
	
	bind(elem,'mousemove',function(evt){
		if(!elem.isMouseDown) return;
			evt=evt||window.event;
			var dx=evt.clientX-elem.mouseX;
			var dy=evt.clientY-elem.mouseY;
			elem.style.left=(elem.originLeft+dx)+'px';
			elem.style.top=(elem.originTop+dy)+'px';
	});
}