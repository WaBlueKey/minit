function load_more() {

	var elemn = document.getElementById("extra_button");

	elemn.onclick = function () {
		document.getElementById("extra_button").style.background = "#FFDB58";
		/*changing the inner text of my button*/
		document.getElementById("extra_button").innerHTML = "LOADING ...";
		/*disabling the link so that users dont keep clicking on it*/
		document.getElementById("extra_button").disable = true;
		document.getElementById("extra_button").style.cursor = "not-allowed";

		setTimeout(function () {
			ajaxGet("statuses-1.html", function (response) {
				document.getElementById("extra_section").innerHTML = response;
			});
		}, 2000);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	load_more();
	reply();
});