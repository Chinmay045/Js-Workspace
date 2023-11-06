const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person);

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person);

  "use strict";

function show() {
    console.log(this === window);
}
// window.show();

let sh = show();
console.log(sh);

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // 
let brand = car.getBrand;
console.log(brand());
