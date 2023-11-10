function celciusToFarenheiet(celsius) {
    return celsius * (9 / 5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celciusToFarenheiet(freezingPointC);
const boilingPointF = celciusToFarenheiet(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The Boiling point of water in Fahrenheit is ${boilingPointF}`);