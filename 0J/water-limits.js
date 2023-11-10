const { celciusToFarenheiet } = require('./converters');



const freezingPointF = celciusToFarenheiet(0);
const boilingPointF = celciusToFarenheiet(100);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The Boiling point of water in Fahrenheit is ${boilingPointF}`);

