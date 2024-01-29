let flag = true;
if (flag) {
    console.log('it is true');
}

let myName = '';
let person = myName || 'nobody'
console.log(`My name is ${person}`)

let condition = true;
let a = (condition) ? ('it is true') : ('it is false');
console.log(a)

let position = 'second';

switch (position) {
    case 'first place':
        console.log('it is first place');
        break;
    case 'second':
        console.log("it is second place")
        break;

    case 'third':
        console.log('is is third place');
        break;

    default: console.log("it doesn't exist");
        break;
}

function name(myname) {
    console.log(`My name is ${myname}`);
}
name('chinmay');

function defaultArg(name = 'chinmay') {
    console.log(`My name is ${name}`)
}
defaultArg()

function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}

let b = areaOfTriangle(4, 5);
console.log(b);

function mangoWeight(count) {
    return count * 0.25;
}

function mangoCost(countt) {
    return mangoWeight(countt) * 175;
}

let ab = mangoCost(35);
console.log(ab);



