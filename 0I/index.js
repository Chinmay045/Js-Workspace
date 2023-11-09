class Alpha {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    showAlpha() {
        console.log("value of x is :" + this.x);
        console.log("Value of y is :" + this.y);
    }
}

class Beta extends Alpha {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    showBeta() {
        console.log("Value of x is :" + this.x);
        console.log("value of y is :" + this.y);
        console.log("Value of z is :" + this.z);
    }
    sum(){
        return this.x + this.y + this.z;
    }
}

let a = new Alpha(2,5);
a.showAlpha();
let b = new Beta(4,5,6);
b.showBeta(); 
console.log(`Sum of numbers is ${b.sum()}`);
// a.showBeta();


//Note:
//Inheritance is a concept of inheriting properties of supercalss from subclass
//A subclass inherits all properties(members) of super calss using the keyword called extends.
//A super class contains only the members of superclass,
//A subclass members contains both members of super calss and  subclass.


class Alpha {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    showAlpha() {
        console.log("value of x is :" + this.x);
        console.log("Value of y is :" + this.y);
    }

    static sayHello(){
        console.log("Hello EveryOne");
    }
}

class Beta extends Alpha {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    showBeta() {
        console.log("Value of x is :" + this.x);
        console.log("value of y is :" + this.y);
        console.log("Value of z is :" + this.z);
    }
    sum(){
        return this.x + this.y + this.z;
    }

    static sayNamste(person){
        console.log(`Namaste ${person}!! welcome to india`);
    }
}


Alpha.sayHello();
Beta.sayNamste("Chinmay");
let a = new Alpha(2,5);
a.showAlpha();
let b = new Beta(4,5,6);
b.showBeta();
