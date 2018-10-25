var name = "Ackemo"; //string
var age = 18; // number
// == jämför men kollar inte datatyp
// === jämför och kollar datatyp

// if(age < 18) {
    //Är påståendet True - kör koden mellan måsvingarna
    // console.log("STOP! Du är " + age + " år. Det är inte coolt!");
    
// } else if (age > 18 && age < 45) {
    // console.log("Du är i bästa åldern nu!");
// }
// else {
    //Är påståendet False - kör koden här mellan måsvingarna
    // console.log("Välkum! Du är " + age + " år. Det är extremt coolt!");
// }

// Single line comment
/*
***************
    --- Guessing app ---
***************

*/

var secretNumber = 7;

var userInput = prompt("Gissa ett nummer mellan 1-10");
while (userInput != secretNumber) {
    var userInput = prompt("Gissa igen!")
    if (userInput == secretNumber) {
        document.writeln("GRATTIS!!! DU ÄR EN TROLLKARL!");
    }
}

/*
if (userInput > 5 && userInput < 9) {
    document.writeln("Nu äre nära asså!");
    userInput = prompt("Gissa igen!!!");
}
else if (userInput > secretNumber) {
    document.writeln("FEL! För högt");
}
else {
    document.writeln("FEL! För lågt")
}
*/
/*var age = Number(prompt("Din ålder: "))

if(age < 0) {
    // Du är inte född ännu
    document.writeln("Rip, du lever inte än!");
}
*/