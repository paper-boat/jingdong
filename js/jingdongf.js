//按需加载
window.onload = function() {
	var floor = $(".floor");//获取楼层
	var lis = $(".flis");//获取左边浮动表
	var boxx = $(".floorbox")[0];//获取左边浮动表框
	var cw = document.documentElement.clientWidth;//获取浏览器宽度
	var ch = document.documentElement.clientHeight;//获取浏览器高度
	var bh = boxx.offsetHeight;//获取左边浮动表框高度
	boxx.style.top = (ch - bh) / 2 + "px";//设置左边浮动表框高度
	var flag=true;
	var flag1=true;
	var sign=true;
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;//给浮动表每一个按钮进行编号
		lis[i].onclick = function() {
			sign=false;
			// var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
			var top = floor[this.index].offsetTop;//获取所要出现楼层到body顶部的距离
			// obj.scrollTop = top;
			animate(document.documentElement,{scrollTop:top},300,function () {
			    sign=true;
			})//设置滚动条到顶部距离
			animate(document.body,{scrollTop:top},300,function () {
			    sign=true;
			})//设置滚动条到顶部距离
			for (var i = 0; i < lis.length; i++) {//设置按钮的颜色和文字颜色
				lis[i].style.background = "#fff"
				lis[i].style.color = "#c81623"
				lis[i].innerHTML=i+1+"F";
			}
			lis[this.index].style.color = "#fff" //按钮变色，文字变色
			lis[this.index].style.background = "red"
			// var imgs = $("img", floor[i]);
			// for (var k = 0; k < imgs.length; k++) {
			// 	var aa = imgs[k].getAttribute("aa");
			// 	imgs[k].src = aa;
			// }
			var aa = lis[this.index].getAttribute("aa");
			lis[this.index].innerHTML=aa;
		}
	}
	
	window.onscroll=function(){//滚动条事件
		if(!sign){
			return
		}
		var obj = document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i = 0; i < floor.length; i++) {
			if (obj.scrollTop >= (floor[i].offsetTop-ch)) {//按钮变色，文字变色
				for (var j = 0; j < lis.length; j++) {
					lis[j].style.background = "#fff"
					lis[j].style.color = "#c81623"
					lis[j].innerHTML=j+1+"F";
				}
				
				var aa = lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				
				lis[i].style.color = "#fff"//按钮变色，文字变色
				lis[i].style.background = "red"
				// var imgs = $("img", floor[i]);
				// for (var k = 0; k < imgs.length; k++) {
				// 	var aa = imgs[k].getAttribute("aa");
				// 	imgs[k].src = aa;
				// }
			}
		}
		//display方法
		// if (obj.scrollTop>=(floor[0].offsetTop-ch)) {
		// 	boxx.style.display="block"
		// }else{
		// 	boxx.style.display="none"
		// }

		//opacity方法
		if (obj.scrollTop >= (floor[0].offsetTop - ch)) {//开关控制
			if (flag) {
				flag = false;
				animate(boxx, {opacity: 1}, 300, function() {flag1 = true;})
			} 
		}else {
				if (flag1) {
				flag1 = false;
				animate(boxx, {opacity: 0}, 300, function() {flag = true;})
			} 
		}
	}
}