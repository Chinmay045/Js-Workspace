console.log("Hello world");// My first js statement
console.log("my name is chinmay");
console.log(2001);

console.log(5);
console.log(25.69);

console.log("javascript");
console.log('My name is Chinmay !! I love javascript');

console.log(5 > 6);
console.log(5 <= 25);


var a = null; //Assigning null
console.log(a);//o/p of null

var b;//Not definig anything
console.log(b);//output is undefined

// Arithmetic operations

console.log(65 + 55);//Addition
console.log(65 - 55);//Subtraction
console.log(65 * 55);//Mul
console.log(65 / 55);//division
console.log(65 % 55);//Modulo


// String concatination

console.log('Hello' + 'World'); //HelloWorld
console.log('Hello' + " " + 'World'); //Hello World

// String length

console.log("Hello".length);
console.log("My name is Chinmay!!".length);

// String Methods

console.log('Hello'.toUpperCase()); //HELLO
console.log("VAnaKKam".toLowerCase()); //vanakkam
console.log("Super Ranga".startsWith('S')); //true
console.log("Super Ranga".startsWith('R'));  //false

//Build in objects

console.log(Math.random()); //0.821084529958497
console.log(Math.floor(46.6));  //46
console.log(Math.ceil(46.7)); //47
console.log(Number.isInteger(75)); //true
console.log(Number.isInteger(67.4)); //false

//Create and use variables

var myName = 'Chinmay';
var age = 22;

console.log(myName); //Chinmay
console.log(age); //22
console.log("My name is " + " " + myName + " " + "And My age is " + age); //My name is  Chinmay And My age is 22


//local variables using : let

let myName = 'kishan';
let age = 4;

console.log(myName); //kishan
console.log(age); //4
console.log("My name is " + " " + myName + " " + "And My age is " + age); //My name is  kishan And My age is 4


//Constant

const mywife = "Deepika";
const age = 30;
// const mywife = "silk Smitha";
console.log("My wife name is " + mywife + " " +"and her age is " + age); //My wife name is Deepika and her age is 30

//Unary Operators

var a = 5 + 6;
var b = 7 - 4;
var c = a * b;
console.log(a);
console.log(b);
console.log(c);  

var num = 55;

num += 10; //65    |Equivalent: num = num + 10;
num -= 20; //45    |Equivalent: num = num - 20;
num *= 100; //4500 |Equivalent: num = num * 100;
num /= 50; // 90   |Equivalent: num = num /50;
num %= 4; //2      |Equivalent: num = num % 10;

console.log(num);

//Increment and Decrement operator

let year = 1987;
year ++;
console.log(year); //1987
year--;
year--;
year--;
console.log(year); //1985

//String Interpolation

let myName = 'Chinmay';
let age = 22;

console.log("My name is " +myName + "and my age is :" +age );

console.log(`my name is ${myName} and my age is ${age}`);


//type of operator

let a = "Hello";
console.log(typeof(a));
a = 90;
console.log(typeof(a));
b = 9.88;
console.log(typeof(b));
console.log(a < b);

