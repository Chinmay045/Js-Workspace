// let personOne = {
//     firstName: 'Chinmay',
//     lastName: 'Sandur',

// }

// let personTwo = {
//     firstName: 'Virat ',
//     lastName: 'Kohli'
// }

// let printName = function (homeTown, state) {
//     console.log(`My first name is ${this.firstName} and my last name is ${this.lastName} from ${homeTown}, ${state}`)
// }

// printName.call(personOne, 'Shivamogga', 'Karnataka');
// printName.apply(personTwo, ['Bengaluru', 'Karnataka']);

// function Person(job, married) {
//     this.employ = job;
//     this.status = married;
//     // var employ = job;
//     // var status = married;
// }
// var ray = new Person("student", true);
// console.log(ray.employ)

const promise = new Promise((resolve, reject) => {
    let num = Math.random();
    console.log(num);
    if (num >= 0.5)
        resolve('Promise has been fullfilled')
    else
        reject('Promise has not been fullfilled');
})

promise.then((result) => {
    console.log('Success', result);
}).catch((error) => {
    console.log('error', error)
})