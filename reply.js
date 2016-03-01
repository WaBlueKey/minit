window.addEventListener("load",  function () {
    var e = document.getElementById('playstatus');
    e.onclick = function () {

        var item_num = playstatus.getAttribute('data-num');
        document.getElementById('playform' + item_num).style.display = 'block';
    };

});