function celciusToFarenheiet(celsius) {
    return celsius * (9 / 5) + 32;
}

const fahrenheitToCelsius = function (fahreheit) {
    return (fahreheit - 32) * (5 / 9);
};

export { celciusToFarenheiet, fahrenheitToCelsius };