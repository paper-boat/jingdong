$(function() {
	var hover=$(".hover");
	var dropdown=$(".dropdown");
	for (var i = 0; i < hover.length; i++) {
		hover[i].index=i;
		hover[i].onmouseover=function() {
			dropdown[this.index].style.display="block"
		}
		hover[i].onmouseout=function() {
			dropdown[this.index].style.display="none"
		}
	}

   var cha=$(".chacha")[0];
   cha.onclick=function () {
   	var xiaoshi=$(".top-img")[0];
   	xiaoshi.style.display="none"
   }

   	var bannerleftlis=$(".banner-left-lis")
   	var cebianlan=$(".cebianlan-box")
   	for (var i = 0; i < bannerleftlis.length; i++) {
	   	bannerleftlis[i].index=i;
	   	bannerleftlis[i].onmouseover=function(){
	   		cebianlan[this.index].style.display="block"
	   	}
	   	bannerleftlis[i].onmouseout=function(){
	   		cebianlan[this.index].style.display="none"
	   	}
   	}
	for (var i = 0; i < cebianlan.length; i++) {
	   	cebianlan[i].index=i;
	   	cebianlan[i].onmouseover=function(){
	   		bannerleftlis[this.index].classList.add('active');
	   		cebianlan[this.index].style.display="block"
	   	}
	   	cebianlan[i].onmouseout=function(){
	   		bannerleftlis[this.index].classList.remove('active');
	   		cebianlan[this.index].style.display="none"  		
	   	}
	};


	var box=$(".banner")[0];
	var imgs = $(".banner-img");
	var circle = $(".clrcles");
	var n = 0;
	var right = $(".right")[0];
	var left = $(".left")[0];
	var t=setInterval(move, 2000)
	function move(type) {
		var type=type||"r";//判断type初始值
			if (type=="r") {
				n++;
			    if (n>=circle.length) {
				    n=0;
			    }
			}else{
				n--;
				if (n<0) {
					n=circle.length-1;
				};

			}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0},400)
			circle[i].style.background = "#3e3e3e";
		}
		animate(imgs[n],{opacity:1},400)
		circle[n].style.background = "#b61b1f";
	}
	box.onmouseover = function() {
		clearInterval(t)
	}
	box.onmouseout = function() {
		t = setInterval(move, 2000)
	}
	for (var i = 0; i < circle.length; i++) {
		circle[i].index = i;
		circle[i].onmouseover = function() {
			for (var i = 0; i < circle.length; i++) {
				circle[i].style.background = "#3e3e3e"
				animate(imgs[i],{opacity:0},400)
			}
			circle[this.index].style.background = "#b61b1f"
			animate(imgs[this.index],{opacity:1},400)
		}
	}
	right.onclick = function() {
		move("r")
	}
	left.onclick = function() {
		move("l")
	}


	var lu=$(".lunbori")[0]
	var lunbo=$(".lunbo-right")[0];
	var boss = $(".lunboimg");
	var you = $(".rright")[0];
	var zuo = $(".lleft")[0];
	var width=boss[0].offsetWidth;
	var flag = true;
    lu.onmouseover = function() {
		you.style.display="block"
		zuo.style.display="block"
	}
	lu.onmouseout = function() {
		zuo.style.display="none"
		you.style.display="none"
	}
	zuo.onclick = function() {
		dong()
	}
	you.onclick = function() {
		dong1()
	}
		function dong() {
			if (!flag) {
				return;
			}
			flag = false;
			var pho = getFirst(lunbo);
			// console.log(pho)
			animate(lunbo, {
				left: -width
			},300, function() {
				lunbo.appendChild(pho);
				lunbo.style.left = 0;
				flag = true;
			})
		}
		function dong1() {
			if (!flag) {
				return;
			}
			flag = false;
			var pho = getFirst(lunbo);
			var pho1 = getLast(lunbo);
			insertBefore(pho1, pho);
			lunbo.style.left =-width + "px";
			animate(lunbo, {
				left:0
			}, 300, function() {
				flag = true;
			})
		}


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
			var imgss = $("img", floor[i]);
			for (var k = 0; k < imgss.length; k++) {
				var aa = imgss[k].getAttribute("aa");
				imgss[k].src = aa;
			}
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
				var imgss = $("img", floor[i]);
				for (var k = 0; k < imgss.length; k++) {
					var aa = imgss[k].getAttribute("aa");
					imgss[k].src = aa;
				}
			}	
		}
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



	var nlas=$(".nla");
	var ntas=$(".nta");
	for(i=0;i<nlas.length;i++){
		nlas[i].index=i;
		nlas[i].onmouseover=function(){
    		// var ww=nlas[this.index].offsetWidth;
    		nlas[this.index].background="#c81623"
   			animate(ntas[this.index],{width:62},500)
		}
		nlas[i].onmouseout=function(){
			animate(ntas[this.index],{width:0},500)
		}
	}

	var xlbs = $(".xlb"); //获取图片的大框
	for (var i = 0; i < xlbs.length; i++) {
		xz(xlbs[i])
	}
    
    var floors=$(".floor");
    var shu=floors.length-1;
    for (var i = 0; i <shu; i++) {
    	louceng(floors[i])
    }
    function louceng(ooo){
    	var tabs=$(".tab",ooo)[0];
	    var mains=$(".main",ooo);
	    var as=$(".lia",tabs)
	    // console.log(as.length)
		for (var i = 0; i < as.length; i++) {
		    as[i].index=i;
		    as[i].onmouseover=function(){
		    	for (var i = 0; i < mains.length; i++) {
		    		as[i].classList.remove("afirst")
			    	mains[i].style.zIndex=0;
			    }
		    	as[this.index].classList.add("afirst")
			    mains[this.index].style.zIndex=1;
			}
		}
    }
   
})

