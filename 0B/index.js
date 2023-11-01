
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


//Parameter and Arguments
//Inputs defined at the start of te function in known as Parameters
//Inputs defined at the time of invoking the function is known as Arguments.


function sayHello(myName) {
    console.log("Hello Mr. " + myName + "! How are you");
}

function sayNamaste(myName) {
    console.log(`namaste ${myName} ! Welcome Home`);
}

function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    console.log("area of triangle is:" + area);
}

function areaOfRectangle(length, breadth) {
    let area = length * breadth;
    console.log("Area of rectangle is " + area);
}

sayHello('Chinmay'); //Hello Mr. Chinmay! How are you
sayNamaste("Chinmay"); //namaste Chinmay ! Welcome Home
areaOfTriangle(2, 3); //area of triangle is:3
areaOfRectangle(4, 5); //Area of rectangle is 20


//Default arguments
//While declaring a functio parameters , we can declare it's default values.
//In case the user forgets to pass the arguments , default argumenst will be considered for processing.


function sayNamaste(myName = "Random Person") {
    console.log(`namaste ${myName} ! Welcome Home`);
}

function areaOfTriangle(b = 5, h = 5) {
    let area = 0.5 * b * h;
    console.log("area of triangle is :" + area);
}

function areaOfRectangle(length = 10, breadth = 5) {
    let area = length * breadth;
    console.log("Area of rectangle is " + area);
}

sayNamaste(); //namaste Random Person ! Welcome Home
areaOfRectangle(); //Area of rectangle is 50
areaOfTriangle(); //area of triangle is :12.5


//Return Statements

function areaOfRectangle(length = 10, breadth = 10) {
    let area = length * breadth;
    console.log("Area of rectangle is " + area);
}

function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}


let triangleArea = areaOfTriangle(10, 15);
console.log(triangleArea); //75

areaOfRectangle(15, 20); //Area of rectangle is 300

//Helper Function
//Invoking one function inside another function is known as Helper Function

function mangoWeight(count) {
    return count * .25;
}

function mangoCost(count) {
    return mangoWeight(count) * 175;
}

let costOfMangoes = mangoCost(25);

console.log(`cost of 25 mangoes is : Rs. ${costOfMangoes} only/-`); //cost of 25 mangoes is : Rs. 1093.75 only/-

console.log("cost of 35 mangoes is Rs." + mangoCost(35)); //cost of 35 mangoes is Rs.1531.25

console.log(`cost of 45 mangoes is Rs. ${mangoCost(45)} only/-`); //cost of 45 mangoes is Rs. 1968.75 only/-

//Function Expression
//Function Expression is nothing but a function object referred by avariable
//As we don't name anything is called :Anonymous function
//With this we can start transferring the function object to another variable and start invoking the functio by that name

function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}

var triangleArea = function (b, h) {
    let area = 0.5 * b * h;
    return area;
}

console.log(`Area using Function :  ${areaOfTriangle(10, 4)}`); //Area using Function :  20

console.log(`Area using Function Expression : ${triangleArea(5, 7)} `); //Area using Function Expression : 17.5 
