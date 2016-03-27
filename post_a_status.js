
document.addEventListener("DOMContentLoaded",function () {
	
	document.getElementById('replayform').style.display = 'none'; 
    var el = document.getElementById('replaystatus');
    el.onclick = function () {
     
        var h = document.getElementById('replayform')
		h.toggle(); 
    };


});
