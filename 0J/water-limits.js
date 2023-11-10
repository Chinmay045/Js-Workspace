const converters = require('./converters');

const freezingPointF = converters.celciusToFarenheiet(0);
const boilingPointF = converters.celciusToFarenheiet(100);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The Boiling point of water in Fahrenheit is ${boilingPointF}`);

