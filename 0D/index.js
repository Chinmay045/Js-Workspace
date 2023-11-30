
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
    param(5, 5);
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

const logic = function (item) {
    if (typeof item == 'number') {
        return true;
    }
    else {
        return false;
    }
}

const num = mixedArray.filter(logic);
console.log(num);



//Aam zindagi (short form)
const mixedArray = ['apple', 'banana', 5.4, 8, 'kiwi', '3.147', 9.5, '25'];

const logic = function (item) {
    return (typeof item == 'number') ? true : false;
}

const num = mixedArray.filter(logic);
console.log(num);

// *******************************//
const mixedArray = ['apple', 'banana', 5.4, 8, 'kiwi', '3.147', 9.5, '25'];

const logic = (item) => {
    return (typeof item == 'number') ? true : false;
}

const num = mixedArray.filter(logic);
console.log(num);

//Find Index Method
//findIndex() Method retrieves the index of first element of array which mathes wit the true  condition with the logic

let fruits = ['apple', 'pineapple', 'banana', 'dragon-fruit', 'orange', 'kiwi'];

let fruitNum = fruits.findIndex((fruit) => {
    return fruit === 'banana';
});

console.log(fruitNum);


const num = mixedArray.filter(logic);
console.log(num);

let startsWithD = fruits.findIndex((fruit) => {
    return fruit[0] === 'd';
});

console.log(startsWithD);

//sort() method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);


//Some()
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
//Aam zindagi
const ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age > 18;
}
console.log(ages.some(checkAdult));


//Mentos Zindagi
const ages = [3, 10, 18, 20];
let Age = ((age) => {
    return age > 18;
});
console.log(ages.some(Age));


//reduce Method
//Aam zindagi
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
const numbers = [15.5, 2.3, 1.1, 4.7];
let sum = numbers.reduce(getSum);

function getSum(total, num) {
    return total + Math.round(num);
}

console.log(sum);

//Mentos Zindagi

const numbers = [15.5, 2.3, 1.1, 4.77];
// (getSum);

let sum = numbers.reduce((total, num) => {
    return total + Math.round(num);
});

console.log(sum);