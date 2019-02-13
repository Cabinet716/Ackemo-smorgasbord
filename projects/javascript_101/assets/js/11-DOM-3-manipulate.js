//select
var element = document.getElementById("highlight");
//manipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.backgroundColor = "#aaa";
element.style.marginTop = "10px";

var ele = document.querySelector("h1");
ele.classList.add("some-class");


//select
var styledEle = document.getElementsByClassName("special")[0];

//manipulate
    styledEle.addEventListener("click", function(){
    styledEle.classList.toggle("wierd-class");
})

tag.classList.add("another-class");
tag.classList.remove("another-class");
tag.classList.toggle("another-class");

var pEle = document.querySelector(".test");
pEle.textContent = "This is a really <strong> lit <strong> paragraph"
pEle.innerHTML = "This is a really <strong> litly <strong> paragraph"

document.getElementsByTagName("h1")[1].innerContent = "The end!";
document.getElementsByTagName("h1")[1].innerHTML = "The <i>e<i>nd!";

var link = document.querySelector("a");
link