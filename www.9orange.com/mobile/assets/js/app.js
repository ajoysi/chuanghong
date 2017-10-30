//首页运营商切换
  $(function(){
    var width = $('body').width()/4;
    $('.am-slider').flexslider({itemWidth: width,controlNav: false,itemMargin: 2});
  })

//侧边栏菜单状态
$(function(){
  $('#company-nav').on('open.collapse.amui', function() {
    $('.am-family').addClass('am-navbar-hover');
  }).on('close.collapse.amui', function() {
    $('.am-family').removeClass('am-navbar-hover');
  });
  $('#role-nav').on('open.collapse.amui', function() {
    $('.am-company').addClass('am-navbar-hover');
  }).on('close.collapse.amui', function() {
    $('.am-company').removeClass('am-navbar-hover');
  });
})

/* 礼品商城 */
$(function(){
	$('.am-shop-list li').click(function(){
		var select=$(this).find('input').attr('checked');
		$(this).parents('.am-shop-list').find('li').removeClass('on');
		$(this).parents('.am-shop-list').find('input').removeAttr('checked');
		$(this).find('input').attr('checked','true');
		$(this).addClass('on');
	})
})

/*选择速率*/
$(function(){
  var num= 100/$('.am-cmcc-selrate .am-btn').length;
  $('.am-cmcc-selrate .am-btn').css('width',num+'%');
})

/*选择期限*/
$(function(){
  var num= 100/$('.am-cmcc-selterm .am-btn').length-1;
  var margin=$('.am-cmcc-selterm .am-btn').length/($('.am-cmcc-selterm .am-btn').length-1);
  $('.am-cmcc-selterm .am-btn').css('width',num+'%');
  $('.am-cmcc-selterm .am-btn').css('margin-right',margin+'%');
})