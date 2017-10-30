//页面右侧浮窗
$(function(){
	$(".floot_b,.floot_c").hover(function(){
		$(this).find(".floot_b_inside").stop(true,true).animate({left:"-110px"},600)
	},function(){
		$(this).find(".floot_b_inside").stop(true,true).animate({left:"60px"},600)
	  }
	)

	$(".floot_d").hover(function(){
		$(this).find(".floot_wx").stop(true,true).fadeIn()
	},function(){
		$(this).find(".floot_wx").stop(true,true).fadeOut()
	  }
	)

	$(".floot_e").bind("click",function(){
		$("html,body").animate({scrollTop:"0px"},1500)
	})

	$(".close").bind("click",function(){ 
		 $(this).parents(".floot_mish").fadeOut("slow",function(){
		 	 var $height=$(".flooting").height()/2;
		     $(".flooting").css({"margin-top":-$height})
		 })
		 

	})
})


//头部二维码
$(function(){
	$(".wx_top").hover(function(){
		$(this).find(".wx_top_big").stop(true,true).fadeIn()
	},function(){
		$(this).find(".wx_top_big").stop(true,true).fadeOut()
	  }
	)
})


//导航下拉
$(function(){
	$(".nav ul li").hover(function(){
		$(this).find(".subnavBox").stop(true,true).slideDown()
	},function(){
	    $(this).find(".subnavBox").stop(true,true).slideUp()	
	})
})


//首页底部点击下拉
window.onload=function(){
	$(".chosen-select-no-single").chosen(); //下拉框模拟
	
	$(".foot_btm_top span").click(function(){
		var bottom = $(".foot_btm").css("bottom");
        if(bottom == "-481px") {
        	$(".select-img").addClass("on")
			$(this).parents(".foot_btm").stop(true,true).animate({bottom:"0px"},1000);
		}
		else {
			$(".select-img").removeClass("on")
		    $(this).parents(".foot_btm").stop(true,true).animate({bottom:"-481px"},1000)	
		}
	})
	
}

$(function(){
	$(".subnav_list:last").css({"border":"0"}) ; //去二级导航下 subnav_list 最后的边框
	$(".breadcrumb a:last").css({"color":"#ff9933"}) ; //为面包屑最后导航添加当前色
	$(".telecom_f:last").css({"border":"0"})  //去 telecom_f 最后边框 
})

$(function(){
	jQuery(".Perbanner").slide({
	    titCell: ".hd ul",
	    mainCell: ".bd ul",
	    effect: "fold",
	    autoPlay: true,
	    autoPage: true,
	    trigger: "click"
	});
})

$(function(){
	jQuery(".PerbroadRight").slide();
})

$(function(){

	  $('.queryBtn').click(function(){
	  	
	  });

      $(".demoList li:not('.o')").click(function(){
        $("#displayBox h3").text(  $("h3",this).text() );
        $("#displayBox iframe").attr("src",$("img",this).attr("src").replace(".jpg",".html"));
        $("#displayBox").show();
      });

      //当前效果代码
      $("#displayBox .hd a").click(function(){ $("#displayBox").hide() }); //关闭隐藏盒子
      $("#displayBox").blur( function(){ $(this).hide } );

      var isIE6 = !!window.ActiveXObject&&!window.XMLHttpRequest;
      if( isIE6 ){ $(window).scroll(function(){ $("#displayBox").css("top", $(document).scrollTop()+10) }); }
})


//在线预约切换
$(function(){
    $(".Perrate span").bind("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
    })
    $(".Perterm span").bind("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
    })
    $(".PerChoice li").click(function(){
        $(this).hasClass('current')? $(this).removeClass('current'): $(this).addClass('current');
    });
})

$(function(){
	$('.PerdisplayBox').hide();
	$('.Permask').hide();
    $('.PermaskBox').hide();
	$('.Persub').click(function(){
		$('.PerdisplayBox').show();
		$('.Permask').show();
	});
	$('.OkBtn').click(function(){
		$('.PerdisplayBox').hide();
		$('.Permask').hide();
	});

    $('.Persec02').hide();
    $('.Persec03').hide();

    $('.queryBtn').click(function(){
        $('.PermaskBox').show();
		 $('.Persec01').show();
        $('.PerdisplayBox').show();
        
    });

    // 下一步
    $('.PerNext').click(function(){
        $('.Persec01').hide();
        $('.Persec02').show();
    });
    $('.SubSuc').click(function(){
        $('.Persec02').hide();
        $('.Persec03').show();
    });
    // 上一步
    $('.PerPrev').click(function(){
        $('.Persec02').hide();
        $('.Persec01').show();
    });
	$('.PermaskBox').click(function(){
		$('.Persec01').hide();
		$('.Persec02').hide();
		$('.Persec03').hide();
		$('.PermaskBox').hide();
	})
	$('.cerDetaila').click(function(){
		$('.cerFont').toggle('fast');
	})

	
    $(".PerdisplayBox .boxBg .close").click(function(){
        $('.Persec01').hide();
        $('.Persec02').hide();
        $('.Persec03').hide();
        $('.PermaskBox').hide();
    }); //关闭
	/*视频弹窗*/
	$(".PervideoBox .boxBg .close").click(function(){
        $('.PervideoBox').hide();
        $('.PermaskBox').hide();
    });
	$('.video_btn').click(function(){
		$('.PervideoBox').show();
		$('.PermaskBox').show();
	});

})
$(function(){
  
  if($(window).height()<790){
    $('.PerdisplayBox ').addClass('PerdisplayBoxmin');
  }
})

/*图片上传预览*/
$(function(){
	var delParent;
	var defaults = {
		fileType         : ["jpg","png","bmp","jpeg"],   // 上传文件的类型
		fileSize         : 1024 * 1024 * 10                  // 上传文件的大小 10M
	};
		/*点击图片的文本框*/
	$(".file").change(function(){	 
		var idFile = $(this).attr("id");
		var file = document.getElementById(idFile);
		var imgContainer = $(this).parents(".z_photo"); //存放图片的父亲元素
		var fileList = file.files; //获取的图片文件
		var input = $(this).parent();//文本框的父亲元素
		var imgArr = [];
		//遍历得到的图片文件
		var numUp = imgContainer.find(".up-section").length;
		var totalNum = numUp + fileList.length;  //总的数量
			fileList = validateUp(fileList);
			for(var i = 0;i<fileList.length;i++){
			 var imgUrl = window.URL.createObjectURL(fileList[i]);
			     imgArr.push(imgUrl);
			input.find('img').attr("src",imgArr[i]);
		      
		}
	});
	function validateUp(files){
		var arrFiles = [];//替换的文件数组
		for(var i = 0, file; file = files[i]; i++){
			//获取文件上传的后缀名
			var newStr = file.name.split("").reverse().join("");
			if(newStr.split(".")[0] != null){
					var type = newStr.split(".")[0].split("").reverse().join("");
					console.log(type+"===type===");
					if(jQuery.inArray(type, defaults.fileType) > -1){
						// 类型符合，可以上传
						if (file.size >= defaults.fileSize) {
							alert(file.size);
							alert('您这个"'+ file.name +'"文件大小过大');	
						} else {
							// 在这里需要判断当前所有文件中
							arrFiles.push(file);	
						}
					}else{
						alert('您这个"'+ file.name +'"上传类型不符合');	
					}
				}else{
					alert('您这个"'+ file.name +'"没有类型, 无法识别');	
				}
		}
		return arrFiles;
	}
})

/* 礼品商城 */
$(function(){
	$('.member_select_list li').click(function(){
		var select=$(this).find('input').attr('checked');
		$(this).parents('.member_select_list').find('.sel').removeClass('on');
		$(this).parents('.member_select_list').find('input').removeAttr('checked');
		$(this).find('input').attr('checked','true');
		$(this).find('.sel').addClass('on');
	})
})

/* 更多礼品 */
$(function(){
	$('.PerGift_item li').click(function(){
		var select=$(this).find('input').attr('checked');
		$(this).parent().find('li').removeClass('on');
		$(this).parent().find('input').removeAttr('checked');
		$(this).find('input').attr('checked','true');
		$(this).addClass('on');
	})
})

/* 看用途 */
$(function(){
	$('.Pelkyt_c span').click(function(){
		var check=$(this).find('input').attr('checked');
		if(check){
			$(this).removeClass('checked');
			$(this).find('input').removeAttr('checked');
		}else{
			
			$(this).find('input').attr('checked','true');
			$(this).addClass('checked');
		}
		
	})
})