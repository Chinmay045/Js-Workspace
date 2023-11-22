
let animal = {
    eats: true,
    walk() {
        alert("Animal Walk ")
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

longEar.walk();
alert(longEar.jumps);