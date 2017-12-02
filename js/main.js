$(function(){
	$(".menul").mouseenter(function(){
		$(".menux").show();
	})
	$(".menul").mouseleave(function(){
		$(".menux").hide();
	})
	var index = 0;
	var timer = setInterval(autoplay,3000);
	function autoplay(){
		
		if(index == $(".banner ul li").size()){
			index = 0;
		}
		$(".banner ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner ol li").eq(index).css("background","orange").siblings().css("background","#666");
		$(".banner ol li").click(function(){
			index = $(this).index;
			autoplay();
		})
		index++;
	}
	//切换
	$(".huan_top ul li").eq(0).removeClass().addClass("hover").siblings().removeClass().addClass("out");
	$(".huan_bottom ul li").eq(0).removeClass().addClass("show").siblings().removeClass().addClass("hide");
	$(".huan_top ul li").mouseenter(function(){
		$(this).removeClass().addClass("hover").siblings().removeClass().addClass("out");
		$(".huan_bottom ul li").eq($(this).index()).removeClass().addClass("show").siblings().removeClass().addClass("hide");
	})
	//二维码显示
	$(".erba").mouseenter(function(){
		$(".erweima").css("display","block");
	})
	$(".erba").mouseleave(function(){
		$(".erweima").css("display","none");
	})
	//返回顶部
	$(".ding").click(function(){
		$("body,html").animate({scrollTop:0},600);
	})
})
//$(function(){
//	$.ajax({
//		type:"get",
//		url:"data.json",
//		async:true,
//		success:function(glist){
//			for(var i in glist){
//				//alert(glist[i].list);
//				for(var j = 0 ; j < glist[i].list.length ; j++){
//					var pro = glist[i].list[j];
//					str = 	'<div class="clonec">'+
//								'<a href="#">'+
//									'<img src="'+pro.src+'" />'+
//								'</a>'+
//							'</div>'+
//							'<div class="cloner">'+
//								'<div class="cloner_top">'+
//									'<div class="top1">'+
//										'<a href="#">'+
//											'<img src="img/3.jpg" />'+ 
//										'</a>'+
//									'</div>'+
//									'<div class="top2">'+
//										'<a href="#">'+
//											'<img src="img/4.jpg" />'+ 
//										'</a>'+
//									'</div>'+
//								'</div>'+
//								'<div class="cloner_bottom">'+
//									'<div class="bottom1">'+
//										'<a href="#">'+
//											'<img src="img/5.jpg"/>'+
//										'</a>'+
//									'</div>'+
//									'<div class="bottom2">'+
//										'<a href="#">'+
//											'<img src="img/6.jpg"/>'+
//										'</a>'+
//									'</div>'+
//									'<div class="bottom3">'+
//										'<a href="#">'+
//											'<img src="img/7.jpg"/>'+
//										'</a>'+
//									'</div>'+
//								'</div>'+
//							'</div>';
//					$(".one").append(str);		
//				}
//			}
//		}
//	})
//})

$(function(){
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		success:function(glist){
			//alert(glist.list.length);
			for(var i = 0;i < glist.list.length;i++){
				var pro = glist.list[i];
				var str = '<div class="nn">'+
							'<div class="top"><a href="page.html?pid='+pro.id+'"><img src="img/'+pro.src+'"/></a></div>'+
							'<div class="center"><a href="#">'+pro.name+'</a></div>'+
							'<div class="bottom">商城价：<span>￥'+pro.price+'</span></div>'+
						'</div>';
			$(".right2").append(str);
			}
		}
	})
})
$(function(){
	var cookieInfo = getCookie("userInfo");
	if (cookieInfo.uname) {
		$("#login").html("当前用户："+cookieInfo.uname);
	}else{
		$("#login").html('<a href="login.html">登录</a> / <a href="register.html" class="a">注册</a>');
	}
})



