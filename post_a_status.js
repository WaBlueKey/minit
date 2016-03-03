window.onload = function () {
    var el = document.getElementById('replaystatus');
    el.onclick = function () {
        /*alert("Hello! I am an alert box!!");*/
        var h = document.getElementById('replayform')//.style.display = 'block';
		
		/*if (h.style.display == '')
			{
				h.style.display = 'block';
			}
		else
		{
			h.style.display = '';
		}*/
		h.toggle(); 
    };


};

/*-------------------------------------------------------------------*/