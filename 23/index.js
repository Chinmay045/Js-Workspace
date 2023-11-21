const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fru = fruits.toString();
console.log(fru);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fru = fruits.join(" * ");
console.log(fru);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

