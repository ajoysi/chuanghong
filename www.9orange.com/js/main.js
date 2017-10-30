var xie={};
	xie.ui={};
	xie.app={};

xie.ui.Tab=function(eleWrap,eleTitle,eleCont,event){
	this.eleWrap=$(eleWrap);
	this.eleTitle=this.eleWrap.find(eleTitle);
	this.eleCont=this.eleWrap.find(eleCont);
	this.event=event;
	this.init();
}


xie.ui.Tab.prototype={
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var self=this;
		this.eleTitle.on(this.event,function(){
			var $this=$(this),index=$this.index();
			$this.addClass('current').siblings().removeClass('current');
			self.eleCont.eq(index).removeClass('hide').siblings().addClass('hide');
			self.eleCont.eq(index).find('img').each(function(i, item){ //用于延迟加载的调整
				var data_original = $(item).attr("data-original");
				if(data_original != "" && data_original != $(item).attr("src")) {
					$(item).hide().attr("src", data_original).fadeIn();
				}
			})
		})
	}
}



xie.app.tab=function(){
	new xie.ui.Tab('.service-tab','.module-head>ul>li','.service-tab-body>ul','mouseenter');
	new xie.ui.Tab('.news','.module-head>ul>li','.news-tab>ul','mouseenter');
	new xie.ui.Tab('.witing-solution-tab','.witing-solution-tab-title>ul>li','.witing-solution-tab-cont>.witing-solution-scroll','mouseenter');
	new xie.ui.Tab('#runman-solution-tab','.runman-solution-tab-title>ul>li','.runman-solution-tab-cont>ul','mouseenter');
	new xie.ui.Tab('#runman-cases-tab','.runman-solution-tab-title>ul>li','.runman-solution-tab-cont>ul','mouseenter');
	new xie.ui.Tab('.value-added','.value-added-title>ul>li','.value-added-slide>.value-added-slide-item','mouseenter');
	
	new xie.ui.Tab('.construction-specifics','.tab-title>li','.value-added-slide>.value-added-slide-item','mouseenter');
	
	new xie.ui.Tab('#construction-solution','.construction-tab-title>li','.construction-tab-item>ul','mouseenter');
	
	new xie.ui.Tab('#construction-case','.construction-tab-title>li','.construction-tab-item>ul','mouseenter');
	
	new xie.ui.Tab('[data-ele=pro]','.product-type>a','.product-list>ul','mouseenter');
	
	new xie.ui.Tab('[data-ele=pro]','.product-type2>li','.product-list2>ul','mouseenter');
	
	new xie.ui.Tab('[data-ele=pro]','.product-type3>li','.product-list3>ul','mouseenter');
	
	new xie.ui.Tab('[data-ele=pro]','.product-type4>li','.product-list4>ul','mouseenter');
	
	$('.product-item').each(function(i,item){
		new xie.ui.Tab($(item),'.product-tab-title>li','.product-tab-wrap>ul','mouseenter');
	})
	
}


//tab
xie.app.tab();

(function(){
	var $btnNav=$('.nav-btn'),
		$container=$('.navigation .container'),
		$body=$('body'),
		mask='<div class="htmlMask"></div>';
		
	$btnNav.on('click',function(){
	
		if($container.css('right')=="-230px"){
			$container.css({
				right:0
			});
			$body.append(mask);
		
			$body.on('click','.htmlMask',delHtmlMask);
		}
		else {
			delHtmlMask();
		}
	});
	
	$('')
})();


(function(){
	var $pageTitle=$('.page-title').eq(0),
		$main=$('.main'),
		len=$main.find('.single-page-item').length,
		index=0,
		posTop;
	$pageTitle.find('li').click(function(){
			index=$(this).index();
		
		if(len>$pageTitle.find('li').length){
			posTop=$main.find('.single-page-item').eq(index+1).offset().top;
			$('html,body').animate({
					scrollTop:posTop
			})
		}else{
			posTop=$main.find('.single-page-item').eq(index).offset().top;
			$('html,body').animate({
				scrollTop:posTop
			})
		}
	}).on('mouseenter',function(){
		$(this).addClass('current').siblings().removeClass('current');
	})
	
})();

(function(){
	var $scrollSide=$('.scroll-side');
		$scrollSide.on('click',function(e){
			var $target=$(e.target),
				$htmlBody=$('html,body');
			if($target.hasClass('scroll-top')){
				$htmlBody.animate({
					scrollTop:0
				})
			}else if($target.hasClass('scroll-bottom')){
				$htmlBody.animate({
					scrollTop:$(document).height()
				})
			}
			
		})
})();

(function(){
	var $qrcode=$('.qrcode');
		if(!$qrcode.length){ return };
	var posLeft=$('[data-ele=qrcode]').position().left,
		timer=null;
		$qrcode.css({
			left:posLeft
		})
	$('[data-ele=qrcode],.qrcode').on('mouseenter',function(){
		$qrcode.removeClass('hide');
		clearTimeout(timer);
	}).on('mouseleave',function(){
		timer=setTimeout(function(){
			$qrcode.addClass('hide');
		},100);
	});
})();