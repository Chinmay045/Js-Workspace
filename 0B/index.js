
// let flag = true;
// if (flag) {
//     console.log("Salute, Salute, Salute");
// }

// if (5 > 6) {
//     console.log("Do Something!");
// }
// else if (7 > 9) {
//     console.log("Do Something Something");
// }
// else {
//     console.log("Do anything");
// }

let flag = null;

if (flag) {
    console.log("Flag is Truthy");
}
else {
    console.log("Flag is Falsy");
}

//Short circuit Assignment

let myName = '';
let person = myName || "Nobody";
console.log(`You know, ${person} is a good boy`);

//Ternary Operator

let condition = false;
(condition) ? (console.log("First Statement")) : (console.log("Second Statement"));


//Switch Example

let position = "Second Place";

switch (position) {
    case "First Place":
        console.log("You will get gold medal");
        break;

    case "Second Place":
        console.log("You will get Silver medal");
        break;
    case "Third Place":
        console.log("You will get bronze medal");
        break;
    default:
        console.log("You will get Silver medal");
        break;
}

//Function in Js
//Functions  are the block of code with a name (identifier), which when invoked performes certain set of operations.
//A function can have various inputs and it will return one output.

function sayHello() {
    console.log("Hello Everyone");
}

function remindMe() {
    console.log("Water the plants");
}

sayHello();
sayHello();
sayHello();
remindMe();
remindMe();
