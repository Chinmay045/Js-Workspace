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