document.addEventListener("DOMContentLoaded", function () {
	
var elemn = document.getElementById("extra_button");
	
elemn.onclick =function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("extra_section").innerHTML = xhttp.response;
    }
  };
document.getElementById("extra_section").style.background="white"; 
  xhttp.open("GET", "statuses-1.html", true);
  xhttp.send();
}
});

