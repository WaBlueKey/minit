function ajaxGet(url, onSuccess) {

	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function () {
		
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			onSuccess(xhttp.responseText); 
			
			reply();
		}
	};
	/*this is to handle the backgound in extra comments and keep the background on the see more statuses bar*/
	document.getElementById("extra_section").style.background = "white";
	xhttp.open("GET", url, true);
	xhttp.send();
}
