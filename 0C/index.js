let southAsia = ['India', 'Pakistan', 'Bangladesh'];
console.log(southAsia);

let SouthAsia = [];
SouthAsia[0] = 'India';
SouthAsia[1] = 'Myanmar';
SouthAsia[2] = "Bangladesh";
console.log(SouthAsia);

let SouthAsia = ['India', 'Pakistan', 'Bangladesh', "Bhutan", "Burma", 'Nepal'];
SouthAsia[5] = 'Myanmar';
console.log("Burma has changed to " + SouthAsia[5] + " Recently");

let topEconomy = SouthAsia[0];
console.log(`Richest Economy in South Asia is  ${topEconomy} !!`); //Richest Economy in South Asia is  India !!


console.log(`If we try to access the array out of index we get ${SouthAsia[8]}`);
//If we try to access the array out of index we get undefined


//Const arrays
//Const Arrays can be altered inside. We can add new elements using Arrays.push() method.
//But we cannot assign the variable to some other array or random value. Which will result i an error.

const northAmerica = ['Canada', 'United States Of America', 'Mexico'];
northAmerica[1] = 'USA';
console.log(northAmerica); //[ 'Canada', 'USA', 'Mexico' ]

northAmerica.push('Panama');
console.log(northAmerica); //[ 'Canada', 'USA', 'Mexico', 'Panama' ]

northAmerica = ['Coloumbia', 'Brazil'];   //TypeError: Assignment to constant variable.



let southAsia = ['India', 'Pakistan', 'Bangladesh'];

let SouthAsia = ['India', 'Pakistan', 'Bangladesh', "Bhutan", "Burma", 'Nepal'];
console.log(southAsia.length);
console.log(SouthAsia.length);

//Push and Pop
let nato = ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turky'];
nato.push("Romania", "Greece", 'Latvia', 'Lithuania', 'Estonia');
console.log(nato);

nato.pop();
nato.pop();
nato.pop();
console.log(nato);

//Unshift and Shift
//Unshift and Shift are used to add and remove array from the start
nato.unshift('Ukraine', 'Finland', "Poland");
console.log(nato);

nato.shift();
nato.shift();
console.log(nato);

//Slice Arrays
//Slice method i uded to split the arrays based on index
//Arrays.indexOf('element) is used to find the index of perticular element

console.log(`initial nato was: ${nato.slice(1, 7)}`);
//initial nato was: USA,UK,Germany,Canada,France,Italy

console.log("New members are :" + nato.slice(8)); //New members are :Romania,Greece

console.log(nato.slice(4, 6)); //[ 'Canada', 'France' ]

console.log(nato.indexOf("Germany"));  //3

//loop
for(let i = 0; i < 5; i++){
    console.log(i);
}

let nato = ['USA', 'UK', 'Germany', 'Canada', 'France', 'Italy', 'Turky'];
for(let i = 0; i < nato.length; i++ ){
    console.log(nato[i]);
}

for(let i = 7; i>=0;i--){
    console.log(i);
}