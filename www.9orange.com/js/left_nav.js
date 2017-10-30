/**左侧导航********/
$(document).ready(function() {
	
	$('.inactive').click(function(){
		if($(this).siblings('ul').css('display')=='none'){
			$(this).parent('li').siblings('li').removeClass('inactives');
			$(this).addClass('inactives');
			$(this).siblings('ul').slideDown(100).children('li');
			$(this).parent('li').siblings('li').children('ul').each(function(){
			    if($(this).css('display')=='block'){
			    $(this).hide();
			}
			})
			
		}else{
			//控制自身变成+号
			//$(this).removeClass('inactives');
			//控制自身菜单下子菜单隐藏
			$(this).siblings('ul').slideUp(100);
			//控制自身子菜单变成+号
			$(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
			//控制自身菜单下子菜单隐藏
			$(this).siblings('ul').children('li').children('ul').slideUp(100);

			//控制同级菜单只保持一个是展开的（-号显示）
			$(this).siblings('ul').children('li').children('a').removeClass('inactives');
		}
	});
	
	
	/***图片缩放**/
	var x_img = $(".si_ser li img");
	$(x_img).hover(function(){
		$(this).animate({width:"105%"},500)
	},function(){
			$(this).animate({width:"100%"},500)
		})
	
	
	
	
	
	
	
});




/******加入收藏*******/
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}



