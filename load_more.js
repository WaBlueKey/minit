function load_more() {
	
	var elemn = document.getElementById("extra_button");
					  
	elemn.onclick = function () {
		
		ajaxGet("statuses-1.html", function (response) {
			document.getElementById("extra_section").innerHTML = response;
		});
		
	}
}

document.addEventListener("DOMContentLoaded",function () {
	load_more();
	reply(); 
});