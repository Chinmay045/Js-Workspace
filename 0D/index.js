
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