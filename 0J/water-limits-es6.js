import { celciusToFarenheiet, fahrenheitToCelsius } from './converters-es6.js';

const buttonElement = document.getElementById('button');
console.log(buttonElement);
buttonElement.addEventListener('click', clickMe);

function clickMe() {
    let element = document.getElementById("container");
    console.log(element);
    element.innerHTML = `<h1>Boiling point is :${celciusToFarenheiet(100)} 
    & Freezing point is: ${celciusToFarenheiet(0)} </h1>`
}

console.log(`Water Boiling point is ${celciusToFarenheiet(100)} Degree Fahrenheit`);