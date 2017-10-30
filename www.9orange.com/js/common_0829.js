$(function(){
		
		/**服务***/
		$(".kd_serve li img").hover(
			function(){
				$(this).stop().animate({opacity: '.7'},200);
				
			},
		function(){
			$(this).stop().animate({opacity: '1'},200);
		});
		
		
		/**订单查询**/
		
		var moveHeight = 180,
		moveTime = 300,
		curMove = null;
	$('.kd_business li').hover(function (e){
		var curLi = $(this);
		curMove = setTimeout(function (){
			curLi.children('.cover').animate({ top: '-' + moveHeight + 'px' }, moveTime);
			curLi.children('div.wrapS').animate({ top: '0px' }, moveTime);
		}, 200);
	},function(e){
		clearTimeout(curMove);
		$(this).children('.cover').animate({ top: '0px' }, moveTime);
		$(this).children('div.wrapS').animate({ top: moveHeight + 'px' }, moveTime);
	});
	
	
	/***电信选项卡**/
	   jQuery.jqtab = function (tabtit, tab_conbox, shijian) {
            $(tab_conbox).find(".tab_con").hide();
            $(tabtit).find("li:first").addClass("thistab").show();
            $(tab_conbox).find("div:first").show();

            $(tabtit).find("li").bind(shijian, function () {
                $(this).addClass("thistab").siblings("li").removeClass("thistab");
                var activeindex = $(tabtit).find("li").index(this);
                $(tab_conbox).children().eq(activeindex).show().siblings().hide();
                return false;
            });

        };
        /*调用方法如下：*/
		
        $.jqtab("#tabs2", "#tab_conbox2", "mouseenter");
	
		
		
		
})