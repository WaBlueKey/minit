 function reply_extra() {
 	var e = document.querySelectorAll('.playstatu');
 	var item_num = 0;
 	for (var a = 0; a < e.length; a++) {
 		e[a].addEventListener("click", function () {
 			item_num = this.getAttribute('data-num');

 			var h = document.getElementById('playfor' + item_num)

 			h.toggle();

 		});
 	}

 }