function myFunction(p1, p2) {
    return p1 * p2;
}

const Mul = myFunction(3, 6);
console.log(Mul);

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}
//Accessing a function without () returns the function and not the function result:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius;
console.log(value); //[Function: toCelsius]
