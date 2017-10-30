/*
todayDate = new Date();
hours = todayDate.getHours();
if(todayDate.getDay() == 1 || todayDate.getDay() == 2 || todayDate.getDay() == 3 || todayDate.getDay() == 4 || todayDate.getDay() == 5  || todayDate.getDay() == 6)
{
	var returnHtml = "<span class='mini' style=\"cursor:pointer;\"><img src=\"http://www.9orange.com/images/mini.jpg\"></span><span class='zoom' style=\"cursor:pointer;\"></span>";
	returnHtml += "<div id='iframesrc'></div>";

$(function() {
	var boxWidth = 144; //宽度，兼容IE6必写；
	var boxHeight = 237; //可制空
	$("#rightlayoutShow").css({width:boxWidth})
	$("#rightlayoutShow").prepend(returnHtml);
	//$("#iframesrc").html("<img src=\"http://www.9orange.com/images/001hd.jpg\" width=\""+boxWidth+"\" height=\""+boxHeight+"\">");
	$("#iframesrc").html("<IFRAME marginHeight=0 marginWidth=0 noResize scrolling=no frameBorder=0 src=http://www.9orange.com/js/iframe.html width=\""+boxWidth+"\" height=\""+boxHeight+"\">><\/IFRAME>");
	//这里可以是Iframe Image Flash Text
	
	$("#rightlayoutShow .mini").click(function() {
		$("#iframesrc").slideUp("slow",function() {
			$("#rightlayoutShow .zoom").html("<img src=\"http://www.9orange.com/images/close.gif\">");
			$("#rightlayoutShow .mini").text("");
		});
		$("#rightlayoutShow .zoom").css({display:"block"});
		$("#rightlayoutShow .mini").css({display:"none"});
	}); 
	$("#rightlayoutShow .zoom").click(function() {
		$("#iframesrc").slideDown("slow",function() {
			$("#rightlayoutShow .mini").html("<img src=\"http://www.9orange.com/images/mini.jpg\">");
			$("#rightlayoutShow .zoom").text("");
		});
		$("#rightlayoutShow .zoom").css({display:"none"});
		$("#rightlayoutShow .mini").css({display:"block"});
	});
	$(window).scroll(function() {
		callScroll("#rightlayoutShow", 10, 10 , "auto" , "absolute");
	});
	function callScroll(Sid, Stop, Sright, Swidth, Sposition) {
		if (IEobject()) {
			var scrollTop = $(window).scrollTop();
		}else{
			var scrollTop = $("#rightlayoutShow").scrollTop();
		}
		$("#rightMessage").prepend(scrollTop);
		$(Sid).css({
			"bottom" : - (scrollTop - Stop),
			"right" : Sright,
			"width" : Swidth,
			"position" : Sposition
		});
	}
});

function IEobject() {
	if (window.XMLHttpRequest) {
		return true; //alert('Mozilla, Safari,IE7 ');
		if(!window.ActiveXObject){
			return true; //alert('Mozilla, Safari');
		} else {
			return true; //alert('IE7');
		}
	} else {
		return false; //alert('IE6');
	}
}
}

else{
}
*/