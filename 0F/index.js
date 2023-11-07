let personOne = {
    firstName: 'Chinmay',
    lastName: 'Ks',

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

personOne.printName();
personTwo.printName();

//fiunction borrowing
let personOne = {
    firstName: "Balaji",
    lastName: "Kr",

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }

}

let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",

    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

personOne.printName.call(personTwo);

//Approach no:2 (Aam Zindagi)

let printName = function (obj) {
    console.log(obj.firstName + " " + obj.lastName);
}

let personOne = {
    firstName: "Chinmay",
    lastName: "Ks",
}


let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

printName(personOne);
printName(personTwo);

//Approach no :2
//(Mentos Zindagi)

let printName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let personOne = {
    firstName: "Chinmay",
    lastName: "Ks",
}


let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}
printName();
printName.call(personOne);
printName.call(personTwo);

//Approac no :3
//Call method with parameters


let personOne = {
    firstName: "Chinmay",
    lastName: "Ks",
}


let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

let printName = function (hometown, state) {
    console.log(`\n ${this.firstName} ${this.lastName} From ${hometown} ${state}`);
}

printName.call(personOne, "Bengaluru", "Karnataka");
printName.call(personTwo, "Mumbai");

//Apply method


let personOne = {
    firstName: "Chinmay",
    lastName: "Ks",
}


let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

let printName = function (hometown, state) {
    console.log(`\n ${this.firstName} ${this.lastName} From ${hometown} ${state}`);
}

printName.apply(personOne, ["Bengaluru", "Karnataka"]);
printName.apply(personTwo, ["Mumbai"]);

//Note:(Interview Question)
//call() method is using "Pass by Reference" as we pass the object on which the method is to be call(with some additional parameters:Comma Separated)

//apply() method is using 'Pass By Reference' as we pass the object on which the method is to be called (with some additional parameters:as an array)

//Bind method


let personOne = {
    firstName: "Chinmay",
    lastName: "Ks",
}


let personTwo = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

let printName = function (hometown, state) {
    console.log(`\n ${this.firstName} ${this.lastName} From ${hometown} ${state}`);
}

let f1 = printName.bind(personOne, "Bengaluru", "Karnataka");
let f2 = printName.bind(personTwo, "Mumbai");
f1();
f2();