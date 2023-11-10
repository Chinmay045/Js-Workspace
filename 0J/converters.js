//Old function
function celciusToFarenheiet(celsius) {
    return celsius * (9 / 5) + 32;
}

//Old function
module.exports.celciusToFarenheiet = celciusToFarenheiet;

module.exports.fahrenheitToCelsius = function (fahreheit) {
    return (fahreheit - 32) * (5 / 9);
};

