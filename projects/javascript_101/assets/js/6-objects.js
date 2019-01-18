// var person = ["Adam", 18, "unknown"];
// console.log(person[2]);

// var person2 = [3, "Stockholm", "Flimpflomp"]
// console.log(person2[1]);

var person = {
    name: "Adam", // key value pair
    age: 18,
    hometown: "Rusksele"
};
// Unlike arrays, objects have no order!
// The key/value pairs are just floating around inside the object

// retrive data from object with the dot notation
console.log("Our lord and saviour is", person.name);

console.log("He was just a peasant at the age of", person.age);
person.age += 1;
console.log("But was worshipped like a god when he turned", person.age);

console.log("So he decided to move from", person.hometown);
person.hometown = "Hell";
console.log("To", person.hometown);

// make an empty object and assign key/value pairs to is
var oddNums = {};
oddNums.int = 1;
oddNums.str = "one";
oddNums.isOdd = true;

// all at once

var dragon = {
    name: "Dragdam",
    breed:"Thornhorn",
    age: 1800,
    isFriendly: false
};

var wanderingStick = new Object();
wanderingStick.name = "Bengt";
wanderingStick.breed = "WanderingStick... duh!";
wanderingStick.age = 2;
wanderingStick.canDance = true;

// objects can hold all sort of data
var junkObject = {
    name:  "Pothead",
    age:  2,
    color: "Space grey",
    isEvil: true,
    friends: ["Daruk", "Revali", "Urbosa"],
    pet: {
        name: "Pelle",
        species: "Gris",
        age: 2
    }
}

console.log(junkObject.pet.species);
console.log(junkObject.friends[2]);
console.log(junkObject.isEvil);

var posts = [
    {
        name: "George von Skrivenburgh",
        title: "Coding for dummies",
        comments: ["Diz is gutt", "I BET I CAN WRITE IT BETTER!"]
    }, 
    {
        name: "Peter Writeful",
        title: "Coding for dummies: an improved version of George von Skrivenburgh version",
        comments: ["Diz even gutterer", "Shet fam u wan"]
    }
];

console.log(posts[1].comments[1]);
for(var i = 0; i < posts.length; i++) {
    console.log(posts[i].title, posts[i].name, posts[i].comments)
}

// ********************************Uppgift*************************************
var movies = [
    {
        title: "Guardians of the galaxy",
        rank: "8,1/10 stars",
        seen: "You have seen it"
    },
    {
        title: "Avengers: Infinity war",
        rank: "9,5/10 stars",
        seen: "You have not seen it"
    },
    {
        title: "Iron man 3",
        rank: "7,2/10 stars",
        seen: "You have seen it"
    }
];

