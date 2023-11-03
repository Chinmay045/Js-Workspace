
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

//Iterators
//Iterators are the methods used on arrays to work on the same
//Some of the common iterators are foreach(),map() , filter()

//Aam zindagi
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];
let itrFruit = function (fruit) {
    console.log(`10 grams of ${fruit}`);
}

fruitSalad.forEach(itrFruit);


//Mentos Zindagi
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];


fruitSalad.forEach(function (fruit) {
    console.log(`10 grams of ${fruit}`);
});

//Mentos zindagi with arrow function
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];


fruitSalad.forEach((fruit) => {
    console.log(`10 grams of ${fruit}`);
});


//Map Functions

//forEach() popsout an array and it operates on it.
//map() works in the same way , but it returns a new array with added logic

//Aam zindagi

const numbers = [1, 2, 3, 4, 5];

const logic = function (num) {
    return num * num;
}

const squares = numbers.map(logic);
console.log(squares);  //[ 1, 4, 9, 16, 25 ]

//Mentos zindagi
const numbers = [1, 2, 3, 4, 5];

const logic = numbers.map(function (num) {
    return num * num;
});

console.log(logic);

//Metos zindagi with arrow function

const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(num  =>{
//     return num * num;
// });
const squares = numbers.map(num => num * num);

console.log(squares);

//Filter Method
//It reaturns the new array after the filtering the elements from existing array
//The Callback function (logic method) for the .filter () method should return the true or false.

const mixedArray = ['apple', 'banana', 5.4, 8, 'kiwi', '3.147', 9.5, '25'];

const logic  = function (item){
    if(typeof item == 'number') {
        return true;
    }
    else{
        return false;
    }
}

const num = mixedArray.filter(logic);
console.log(num);
