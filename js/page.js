$(function(){
	var str = location.href;
	//http://127.0.0.1/DIONLY%20jewelry/page.html?pid=shop01
	var id = str.split("?")[1].split("=")[1];
	console.log(str);
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		success:function(glist){
			for(var i = 0;i < glist.list.length;i++){
				if(id == glist.list[i].id){
					str = 	'<div id="a">'+
							'<img src="img/'+glist.list[i].src+'" class="mImg" style="z-index:1"/>'+
							
							'<span id="mask"></span>'+
							'</div>'+
							'<ul id="ad">'+
								'<li><img src="img/'+glist.list[i].src+'" class="sImg"/></li>'+
							'</ul>'+
							'<div id="d">'+
								'<img src="img/'+glist.list[i].src+'" class="bImg" style="z-index:1"/>'+
							'</div>';
					strr = 	'<p>产品名称：'+glist.list[i].name+'</p>'+
							'<p>市场价格：<strike>￥8426</strike></p>'+
							'<p>商城价格：'+glist.list[i].price+'</p>';		
					span = '<span style="display:none" data-id='+glist.list[i].id+' data-name='+glist.list[i].name+' data-src='+glist.list[i].src+' data-price='+glist.list[i].price+'></span>'+
							'<div class="anniu" id="shopcar" style="margin-right:30px;cursor:pointer"><img src="img/addtocart.png"/></div>'+
							'<div class="anniu" style="cursor:pointer"><img src="img/addtofavor.png"/></div>';
					$("#shiha").html(str);
					$("#shixia").html(strr);
					$("#span").html(span);
					break;
				}
			}
			var coun = 0;
			$("#shopcar").click(function(){
				coun++;
				var d = {
						"id":$(this).prev().data("id"),
						"name":$(this).prev().data("name"),
						"src":$(this).prev().data("src"),
						"price":$(this).prev().data("price"),
						"count":1
				};
				var arr = [];
				var flag = true;
				var oldCookie = getCookie("shoplist");
				if(oldCookie.length!=0){
					arr = oldCookie;
					for(var i = 0;i < arr.length;i++){
						if(d.id == arr[i].id) {
								arr[i].count++;
								flag = false;//改变开关，阻止再次向数组中添加商品
								break;
						}
					}
				}
				if(flag){
					arr.push(d);
				}
				setCookie("shoplist",JSON.stringify(arr));
				alert("成功添加到购物车！");
				console.log(document.cookie);
				$(".right .s").html(coun);
			})
		}
	})
})
