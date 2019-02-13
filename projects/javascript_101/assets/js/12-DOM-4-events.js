var btn = document.querySelector("button");

// Manipulate
btn.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "YAY! I've been clicked!"
});

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
        this.style.textDecoration = "line-through";
    });
}

var btnToggle = document.querySelector("#btnToggleBg");
var isPurple = false;
btnToggle.addEventListener("click", function(){
    document.getElementsByTagName("body")[0].classList.Toggle("toggleBg");
    // switch(button.value)
    // {
    //      case "ON":
    //           button.value = "OFF";
    //           isPurple = true;
    //           break;
    //      case "OFF":
    //           button.value = "ON";
    //           isPurple = false;
    //           break;
    // }
    // if(isPurple) {
    //     document.getElementsByTagName("body")[0].style.background = "34495e";
    // }else {
    //     document.getElementsByTagName("body")[0].style.background = "34495e";
    // }
})