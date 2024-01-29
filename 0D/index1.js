const add = (x, y) => {

    console.log(`Sum of two numbers is ${x + y}`);
}

const sum = (params, a, b) => {
    params(a, b)
    console.log('numbers added successfully')
}

sum(add, 43, 8);

