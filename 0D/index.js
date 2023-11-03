
console.log((a, b) => {
    console.log(`Sum of two nummbers : ${a + b}`);
}); //[Function (anonymous)]


const addTwoNumbers = (a, b) => {
    console.log(`Sum of two nummbers : ${a + b}`);
}

addTwoNumbers(7, 8);

let addMethod = addTwoNumbers;
addTwoNumbers(5, 6);
addMethod(5, 6);

//Printing function name

console.log(addTwoNumbers);

console.log(addMethod);

console.log(addTwoNumbers.name);

console.log(addMethod.name);

//This is Aam Zindagi

const add = (x, y) => {
    console.log(`Sum of two numbers is : ${x + y}`);
}

add(5, 6);

//Thhis is Mentos Zindagi

const sum = (param) => {
    param(5, 6);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of two nhumbers is :${x + y}`);
}

sum(add);

//Mentos Zindagi with a twist
const sum = (param, a, b) => {
    param(a, b);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of two numbers is : ${x + y}`);
}

sum(add, 10, 15);



