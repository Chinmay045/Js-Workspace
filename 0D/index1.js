const add = (x, y) => {

    console.log(`Sum of two numbers is ${x + y}`);
}

const sum = (params, a, b) => {
    params(a, b)
    console.log('numbers added successfully')
}

sum(add, 43, 8);


const fruitSalad = ['Banana', 'Kiwi', 'Orange', 'Mosumbi'];
// const fruit = function (fruits) {
//     console.log(`10 grams of ${fruits}`);
// }
// fruitSalad.forEach(fruit)
fruitSalad.forEach((fruit) => {
    console.log(`10 grams of ${fruit}`);
})

const numbers = [2, 3, 4, 5, 6];

const squares = numbers.map((num) => {
    let a = num * num;
    return a;
});
console.log(squares);
let filterEx = [23, 34, 56, 67, 'Banana', 'ornage', 'kiwi'];
const events = filterEx.filter((sum) => {

    return (typeof sum == 'number') ? true : false;
});

console.log(events);

[2, 3, 4].map((sum) => {
    console.log(sum);
})

