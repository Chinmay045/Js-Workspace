let animal = {
    walk() {
        if (!this.isSleeping) {
            alert("I walk");
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// rabbit.sleep();
animal.sleep();

alert(rabbit.isSleeping);
alert(animal.isSleeping);