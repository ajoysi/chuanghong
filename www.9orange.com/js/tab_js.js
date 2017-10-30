/*
     * defalutFirstMenu（firstMum, menuNum）默认展开默认导航的第一个菜单
     * firstMum 一级导航栏栏目的个数
     * menuNum 二级菜单栏栏目的个数
*/
function defalutFirstMenu(firstMum, menuNum) {
    
    $(".cen_l").children("ul").children("li").each(function (i) {

        if (i == (firstMum-1)) {
            $(this).children("ul").show();
            $(this).children("ul").children("li").each(function (j) {
                if (j==(menuNum-1)) {
                    $(this).find("ul").show();
                }
            })
       

        }
    })
}

function setTab(name, cursel) {
    cursel_0 = cursel;

	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById(name+i);
		var menudiv = document.getElementById("con_"+name+"_"+i);
		if(i==cursel){
			menu.className="off";
			menudiv.style.display="block";
		}
		else {
		    if (menu!=null) {
		        menu.className = "";
		        menudiv.style.display = "none";
		    }
			
		}
	}
}
function Next(){                                                        
	cursel_0++;
	if (cursel_0>links_len)cursel_0=1
	setTab(name_0,cursel_0);
} 
var name_0='one';
var cursel_0=1;
var ScrollTime=3000;//循环周期（毫秒）
var links_len, iIntervalId;
//获取参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
onload = function () {

	var links = document.getElementById("tab1").getElementsByTagName('li')
	links_len = links.length;
   
	for(var i=0; i<links_len; i++){
		links[i].onmouseover=function(){
			clearInterval(iIntervalId);
			//this.onmouseout=function(){
			//	iIntervalId = setInterval(Next,ScrollTime);;
			//}
		}
	}

	var changeNum=getUrlParam('cid');
        if(changeNum==null){
	   changeNum=1;
	}
	//setTab('one', changeNum);
	//document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){
	//	clearInterval(iIntervalId);
	//	this.onmouseout=function(){
	//		iIntervalId = setInterval(Next,ScrollTime);;
	//	}
	//}
	//setTab(name_0,cursel_0);
	//iIntervalId = setInterval(Next,ScrollTime);
}