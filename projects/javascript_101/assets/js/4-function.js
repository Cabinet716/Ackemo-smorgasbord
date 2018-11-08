// //Barn lyssna
// console.log("Yeetosaurus-rex");
// console.log("Yeetosaurus-rex");
// console.log("Äre inte en tyranodon?");
// console.log("No u");
// console.log("NANI DA FUQ");
// //Barn nynna
// console.log("Yeetosaurus-rex");
// console.log("Yeetosaurus-rex");
// console.log("Äre inte en tyranodon?");
// console.log("No u");
// console.log("NANI DA FUQ");
// //Barn sjunga
// console.log("Yeetosaurus-rex");
// console.log("Yeetosaurus-rex");
// console.log("Äre inte en tyranodon?");
// console.log("No u");
// console.log("NANI DA FUQ");

function yeetosaurus() {
    console.log("Yeetosaurus-rex");
    console.log("Yeetosaurus-rex");
    console.log("Äre inte en tyranodon?");
    console.log("No u");
    console.log("NANI DA FUQ");
}

yeetosaurus();
yeetosaurus();
yeetosaurus();

function doSomething() {
    console.log("Herrow word!")
    console.log("Do somfin!")
}

doSomething();
doSomething;

function square(num, num1) {
    console.log(num * num1);
}

square(5, 6);

function sayHello(name) {
    console.log("Well hello there, dear" + name);
}

sayHello("U mom");
sayHello("Peter");

function area(length, height) {
    console.log("The area of " + length + "and" + height + "is" + length + height);
}
area(5,10);

function greet(person1, person2, person3, person4) {
    console.log("Hej, ", person1 + "!");
    console.log("Hej, ", person2 + "!");
    console.log("Hej, ", person3 + "!");
    console.log("Hej, ", person4 + "!");
}

greet("Adam", "PV", "Flimpflomp", "Doodis");

function squared(x) {
    return x * x;
}

console.log("4 squared is: ", squared(4));

var result = squared(10);
console.log(result);

function isEven(x){
    if (x % 2 == 0){
    return true;
    } else {
        return false;
    }
}


function kebabToSnake(str){
    var myString = str.replace(/-/g, "_");
    return myString;
}

function localScope(){
    var showScope = 31;
    console.log(showScope);
}

vae showScopeY = 99;
function localScopeY(){
    showScopeY = 100;
    console.log(showScopeY);
}

console.log(showScopeY)
localScopeY();