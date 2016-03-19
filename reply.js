function reply() {
 	var e = document.querySelectorAll('.playstatus');
 	var item_num = 0;
 	for (var a = 0; a < e.length; a++) {
 		e[a].addEventListener("click", function () {
 			item_num = this.getAttribute('data-num');

 			var h = document.getElementById('playform' + item_num)

 			h.toggle();

 		});
 	}

 }