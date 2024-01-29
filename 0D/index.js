const addTwoNumbers = (a, b) => {
    let c = a + b;
    console.log(`Sum of two numbers is ${b}`);
}

addTwoNumbers(5, 6);
let addMethod = addTwoNumbers;
addMethod(5, 8);

console.log(addMethod);
console.log(addMethod.name);
console.log(addTwoNumbers);
console.log(addTwoNumbers.name);



