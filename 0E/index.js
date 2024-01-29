let dog = {
    breed: 'goldenRedRiver',
    color: 'gold',
    weight: 18,
    'responds to': ['whistle', 'clap', 'throwBall']
}

console.log(dog.color);
console.log(dog['responds to'])

let baby = {
    cat: 'kitten',
    dog: 'puppy',
    kangaroo: 'zoey',
    'horse baby': 'fawn',
    'baby duck': 'duckling',

}

console.log(baby['horse baby']);
console.log(baby['baby duck']);
delete baby.cat;
console.log(baby)

const actions = {
    sayHello: function () {
        console.log('Hello Everyone')
    },
    sayName: () => {
        console.log('My name is Chinmay')
    }
}

actions.sayHello();
actions.sayName();