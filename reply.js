window.addEventListener("load",  function () {
    var e = document.querySelectorAll('.playstatus');
    
    for (var a= 0; a < e.length; a++){
    /*
    e.onclick = function () {

        var item_num = playstatus.getAttribute('data-num');
        document.getElementById('playform' + item_num).style.display = 'block';
    };*/
    e[a].addEventListener("click",function(){
        var item_num = this.getAttribute('data-num');
         document.getElementById('playform' + item_num).style.display = 'block';
    } ); 
    }

});

