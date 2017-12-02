window.onload = function(){
	var sImg = document.getElementById("ad").children;
	var mImg = document.getElementsByClassName("mImg");
	var bImg = document.getElementsByClassName("bImg");
	var a = document.getElementById("a");
	var d = document.getElementById("d");
	function $(id){
		return document.getElementById(id);
	}
	var index = 1;
	for(var i = 0;i < sImg.length;i ++){
		sImg[i].index = i;
		sImg[i].onclick = function(){
			mImg[this.index].style.zIndex = index++;
			bImg[this.index].style.zIndex = index++;
		}
	}
	a.onmouseover = function(){
		d.style.display = "block";
		$("mask").style.display = "block";
	}
	a.onmouseout = function(){
		d.style.display = "none";
		$("mask").style.display = "none";
	}
	document.onmousemove = function(eva){
		var e = eva || window.event;
		var x = e.pageX - 43 - $("mask").offsetWidth/2;
		var y = e.pageY - 231 - $("mask").offsetHeight/2;
		if(x < 0){
			x = 0;
		}else if(x > 210){
			x = 210;
		}
		if(y < 50){
			y = 50;
		}else if(y > 260){
			y = 260;
		}
		$("mask").style.top = y + "px";
		$("mask").style.left = x + "px";
		//console.log(e.pageY)

		for(var i = 0;i < bImg.length;i++){
			bImg[i].style.left = -2 * x + "px";
			bImg[i].style.top = -2 * y + 100 + "px"
		}
	}
	
}
