let personOne = {
    firstName: 'Chinmay',
    lastName: 'Ks',

    printName () {
        console.log(this.firstName + " " +this.lastName);
    }
}

let personTwo = {
    firstName: "Sachin",
    lastName:"Tendulkar",

    printName(){
        console.log(this.firstName + " " + this.lastName);
    }
}

personOne.printName();
personTwo.printName();