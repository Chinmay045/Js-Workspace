function funA(){
    console.log("Hello World");
}

funA();

function funB(value){
    console.log(value);
}

funB(25);

function add() {
    let x = 10;
    let y = 20;
    let z = x + y;

return z;
}

// let C = add();
// console.log(C)
funB(add);

let x1 = add();
let x2 = add;
let c = x2();
console.log(`Value of c is :${c}`);