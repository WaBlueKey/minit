window.onload = function () {
	var el = document.getElementById('replaystatus');
	el.onclick = function () {
		/*alert("Hello! I am an alert box!!");*/
		 document.getElementById('replayform').style.display='block'; 
	};
	var e = document.getElementById('playstatus');
	e.onclick = function () {

		document.getElementById('playform').style.display='block'; 
	};
};

/*-------------------------------------------------------------------*/