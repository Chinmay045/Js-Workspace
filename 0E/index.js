let dog = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,
    'responds to': ['wistle', 'clap', 'Throw ball'],
    tag_no: 776
}

let dogColor = dog.color;
console.log(`color of the dog is: ${dogColor}`);
console.log(`The dog is weighing ${dog.weight} kilos`);

//we cannot write dog.responds to for a multiword key,as it has a space

let response = dog['responds to'];
console.log(`My do responds to ${response}`);
console.log(dog.tag_no);


let baby = {
    cat: 'kitten',
    dog: 'puppy',
    kangaroo: 'zoey',
    'horse baby': 'fawn',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'
}

// console.log(baby);  //Prints the whole object

console.log(baby.cat);
console.log(baby.dog);
console.log(baby['horse baby']);
console.log(baby[' baby duck ']);
console.log(baby.lion);

baby.cow = 'Calf';
baby['Baby Monkey'] = 'infant';
console.log(baby);
delete baby.sheep;
delete baby['baby duck'];

console.log(baby); //Prints the whole object

const actions = {
    sayHello: function () {
        console.log("Hello Everyone");
    },

    sayNamaste: function (person) {
        console.log(`Namaste ${person}, How are you ?`);
    },
    add: function (num1, num2) {
        return num1 + num2;
    }
}

actions.sayHello();
actions.sayNamaste('Chinmay');
console.log(`Sum of two numbers is :${actions.add(10, 15)}`);

let profile = {
    fullName: 'Chinmay KS',
    status: 'Single',
    children: 0,
    parents: ['Kantharaj', 'Rashmi'],
    salaried: true
}

const modifyName = function (obj, changedName) {
    obj.fullName = changedName;
}

const addChild = (obj) => {
    obj.children = obj.children + 1;
}

modifyName(profile, 'CKS');
console.log(profile);

addChild(profile);
console.log(profile);


let baby = {
    cat: 'kitten',
    dog: 'puppy',
    kangaroo: 'zoey',
    'horse baby': 'fawn',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'
}

for (let key in baby) {
    console.log(`Child of ${key} is ${baby[key]}`);
}

//Hybrid Objects
let dog = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,

    hungry() {
        console.log("Waggig the tail");
    },

    getInfo() {
        return `My dog is a ${this.breed},is  ${this.color} in color and weighs ${this.weight} kilos`
    }
}

dog.hungry();
console.log(dog.getInfo());

let dog = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,

    hungry: () => {
        console.log("Waggig the tail");
    },

    getInfo: () => {
        return `My dog is a ${this.breed},is  ${this.color} in color and weighs ${this.weight} kilos`
    }
}

dog.hungry();
console.log(dog.getInfo()); //My dog is a undefined,is  undefined in color and weighs undefined kilos
//we will get this error because using arraow functions we the function will be created outside the  object.And it cannot access the properties inside the object.
//so it is advised not to use arrow functions.


//Get methods

let dog = {
    _breed: 'Golden Retrevier',
    color: 'Orange',
    _weight: 18,

    get breed() {
        return this._breed;
    },
    get weight() {
        return this._weight;
    },

    hungry() {
        console.log("Waggig the tail");
    },

    showInfo() {
        return `My dog is a ${this._breed},is  ${this.color} in color and weighs ${this.weight} kilos`;
    }
}

console.log(dog.breed);
console.log(dog.weight);
console.log(dog.color);

dog.hungry();
console.log(dog.showInfo());

//Setter Method


let dog = {
    _breed: 'Golden Retrevier',
    color: 'Orange',
    _weight: 18,

    get breed() {
        return this._breed;
    },
    get weight() {
        return this._weight;
    },

    set breed(newBreed) {
        if (typeof newBreed == 'string') {
            this._breed = newBreed;
        }
    },

    set weight(num) {
        if (typeof num == 'number' && num > 0) {
            this._weight = num;
        }
        else {
            console.log("Please enter a valid number above zero");
        }
    }

}


console.log(`Dog breed before : ${dog.breed}`);
console.log(`Dog weight before : ${dog.weight}`);
console.log(`Dog Color Before :${dog.color}`);


dog.breed = 'German Shepard';
dog.weight = 23;
dog.color = 'Blackish Brown';

console.log(`Dog breed after : ${dog.breed}`);
console.log(`Dog weight after : ${dog.weight}`);
console.log(`Dog Color after :${dog.color}`);


//Factory
const dogFactory = (breed, weight, color, violent) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,
        _violent: violent,

        showInfo() {
            console.log(`My dog is a ${this._breed}, whose color is ${this._color} & it weighs ${this._weight} kilos`);

            this._violent ? console.log("It is ferocious \n") : console.log("It is sweet \n");
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        get color() {
            return this._color;
        },
        get violent() {
            return this._violent;
        },

        set breed(br) {
            if (typeof br == 'string') {
                this._breed = br;
            }
        },

        set weight(wei) {
            (typeof wei == 'number' && wei > 0) ?
                this._weight = wei : console.log("Please enter the valid number");
        },

        set color(col) {
            if (typeof col == 'string') this._color = col;
        },
        set violent(vio) {
            (typeof vio == 'boolean') ?
                this._violent = vio : console('Enter valid boolean true or false');
        }
    }
}

    let d1 = dogFactory('Labrardor', 18, 'Orange', false);
    d1.showInfo();

    let d2 = dogFactory('German Sheapered', 22, 'Black', true);
    d2.showInfo();


//Objects and Keys

let d3 = dogFactory('Laborder', 18, 'Orange', false);

const dogKeys = Object.keys(d3);
console.log(dogKeys);


const dogKeys = Object.keys(d3);
console.log(dogKeys);

const dogEntries = Object.entries(d3);
console.log(dogEntries);

//Assign example

const modifiedDog = Object.assign({tail: 'Long and Furry', response_time:2},d1);

const modEnt = Object.entries(modifiedDog);
console.log(modEnt);



//Spread Operator