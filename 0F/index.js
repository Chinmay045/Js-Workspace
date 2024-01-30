let personOne = {
    firstName: 'Chinmay',
    lastName: 'Sandur',

}

let personTwo = {
    firstName: 'Virat',
    lastName: 'Kohli'
}

let printName = (obj) => {
    console.log(`My first name is ${obj.firstName} and my last name is ${obj.lastName}`)
}

printName(personOne)