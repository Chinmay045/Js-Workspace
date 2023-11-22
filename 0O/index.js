//whenever we create an object in javascript, JS engine will automatically attach with hidden properties and functions.
//These hidden properties and methods come from prototype.
//We can say :"Our object is attached with another object which is a prototype object and so we are able to access those extra properties and methods."

let arr = ["Chinmay","Chinz"];

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
alert(rabbit.eats)