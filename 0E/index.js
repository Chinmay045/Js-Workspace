let dog = {
    breed: 'Golden Retrevier' ,
    color: 'Orange',
    weight: 18,
    'responds to' : ['wistle', 'clap', 'Throw ball'],
    tag_no:776
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
    sayHello: function(){
        console.log("Hello Everyone");
    },

    sayNamaste: function(person) {
        console.log(`Namaste ${person}, How are you ?`);
    },
    add: function (num1,num2) {
        return num1 + num2;
    }
}

actions.sayHello();
actions.sayNamaste('Chinmay');
console.log(`Sum of two numbers is :${actions.add(10,15)}`);

let profile = {
    fullName: 'Chinmay KS',
    status:'Single',
    children: 0,
    parents: ['Kantharaj', 'Rashmi'],
    salaried: true
}

const modifyName = function(obj, changedName) {
    obj.fullName = changedName;
}

const addChild = (obj) => {
    obj.children = obj.children +1;
}

modifyName(profile, 'CKS');
console.log(profile);

addChild(profile);
console.log(profile);