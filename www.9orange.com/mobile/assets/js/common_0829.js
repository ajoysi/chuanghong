$(function(){

	
	
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