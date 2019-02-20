function getRndNmbrs(min, max){
    var n = [];
    for(var i = 0; i < 3; i++){
        n.push(Math.floor(Math.random() * max) + min);
    }
    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    var wrong = document.getElementsByTagName("LI").innerHTML = Math.floor(Math.random() * 255) + 1;
    var anserw = document.getElementById("nr1").innerHTML = n;
    return n;
}