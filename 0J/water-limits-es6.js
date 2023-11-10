import * as resource from './converters-es6.js'
const buttonElement = document.getElementById('button');
console.log(buttonElement);
buttonElement.addEventListener('click', clickMe);

function clickMe() {
    let element = document.getElementById("container");
    console.log(element);
    element.innerHTML = `<h1>Boiling point is :${resource.celciusToFarenheiet(100)} 
    & Freezing point is: ${resource.celciusToFarenheiet(0)} </h1>, <br><br>
    100 milli meters is ${resource.milliToCenti(100)} centimeters, <br><br>
    10000 centi meters is ${resource.centiToMeter(100000)} meters,<br><br>
    One nanometers is ${resource.default} meters.
    </h1>;`
}

console.log(`Water Boiling point is ${celciusToFarenheiet(100)} Degree Fahrenheit`);