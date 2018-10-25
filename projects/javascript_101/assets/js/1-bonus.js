
var magicWord = "";

var userInput = prompt("Father! Have we arrived yet?");
while (userInput != "Yes"||"yes"||"Yeah"||"yeah") {
    var userInput = prompt("Father! Have we arrived yet?")
    if (userInput == magicWord) {
        document.writeln("My most humble apology for asking so many times father!");
    }
}

document.getElementById("output").innerHTML = text;