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

//fiunction borrowing
let personOne = {
    firstName: "Balaji",
    lastName: "Kr",

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

personOne.printName.call(personTwo);

//Approach no:2 (Aam Zindagi)

let printName = function (obj){
    console.log(obj.firstName + " " + obj.lastName);
}

let personOne = {
    firstName: "Chinmay",
    lastName: "Ks",
}


let personTwo = {
    firstName: "Sachin",
    lastName:"Tendulkar",
}

printName(personOne);
printName(personTwo);