window.onload = function(){
if (window.screen.width <= 1220)
	{
		document.getElementById("toper").style.display="block";
		 window.setTimeout(hiddenMsg,5000)
	 }else{
        document.getElementById("toper").style.display= 'none';
	 }         
}
function hiddenMsg(){ document.getElementById("toper").style.display= 'none';}
function AddFavorite(sURL, sTitle) {   
    try {   
        window.external.addFavorite(sURL, sTitle);   
    } catch (e) {   
        try {   
            window.sidebar.addPanel(sTitle, sURL, "");   
        } catch (e) {   
            alert("加入收藏失败，请使用Ctrl+D进行添加");   
        }   
    }   
}