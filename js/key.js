document.addEventListener("keydown", function (event) {
    var key = event.keyCode;
    var startid = 48;
    for(var i = startid; i < startid + 10; i ++){
        getLink(key - 48);
    }
}, false); 
function getLink(num){
    var id = "link" + num;
    var link = document.getElementById(id).href;
    window.location.href = link;
}