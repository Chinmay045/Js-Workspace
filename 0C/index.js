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

const northAmerica = ['Canada', 'United States Of America','Mexico'];
northAmerica[1] = 'USA';
console.log(northAmerica); //[ 'Canada', 'USA', 'Mexico' ]

northAmerica.push('Panama');
console.log(northAmerica); //[ 'Canada', 'USA', 'Mexico', 'Panama' ]

northAmerica = ['Coloumbia','Brazil'];   //TypeError: Assignment to constant variable.



let southAsia = ['India', 'Pakistan', 'Bangladesh'];

let SouthAsia = ['India', 'Pakistan', 'Bangladesh', "Bhutan", "Burma", 'Nepal'];
console.log(southAsia.length);
console.log(SouthAsia.length);
