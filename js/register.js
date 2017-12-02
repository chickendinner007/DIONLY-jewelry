
window.onload = function(){
	
	var apan = document.getElementsByClassName("apan")[0];
	var tiao = document.getElementsByClassName("tiao")[0];
	var top = document.getElementById("top");
	apan.onclick = function(){
		tiao.style.display = "block";
	}
	top.onmousedown = function(eva){
		var e = eva || window.event;
		var disx = e.offsetX;
		var disy = e.offsetY;
		document.onmousemove = function(eva){
			var e = eva || window.event;
			var x = e.pageX - disx;
			var y = e.pageY - disy;
			tiao.style.left = x + "px";
			tiao.style.top = y + "px";
		}
	}
	top.onmouseup = function(){
		document.onmousemove = null;
	}
}
$(function(){	
	$(".tiao .top span").click(function(){
		$(".tiao").css("display","none");
	})
})

