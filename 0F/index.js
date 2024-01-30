let personOne = {
    firstName: 'Chinmay',
    lastName: 'Sandur',

}

let personTwo = {
    firstName: 'Virat ',
    lastName: 'Kohli'
}

let printName = function (homeTown, state) {
    console.log(`My first name is ${this.firstName} and my last name is ${this.lastName} from ${homeTown}, ${state}`)
}

printName.call(personOne, 'Shivamogga', 'Karnataka');
printName.apply(personTwo, ['Bengaluru', 'Karnataka']);