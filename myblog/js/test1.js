function foo() {
	var name = window.prompt('请输入你的名字:');
	console.log(typeof(name));
	if(name && name != 'null') {
		window.alert('你好,' + name + '!');
	} else {
		window.alert('大家好!');
	}
}