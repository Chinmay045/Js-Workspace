let personOne = {
    firstName: 'Chinmay',
    lastName: 'Sandur',

}

let personTwo = {
    firstName: 'Virat ',
    lastName: 'Kohli'
}

let printName = function () {
    console.log(`My first name is ${this.firstName} and my last name is ${this.lastName}`)
}

printName.call(personOne);