export function celciusToFarenheiet(celsius) {
    return celsius * (9 / 5) + 32;
}

export const fahrenheitToCelsius = function (fahreheit) {
    return (fahreheit - 32) * (5 / 9);
};


export const milliToCenti = (millimeter) => {
    return millimeter / 10;
}

export const centiToMeter = (centimeter) => {
    return centimeter * 100;
}

const nanoMeter = 0.0000000001;

export default nanoMeter;