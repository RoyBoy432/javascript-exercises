const convertToCelsius = function(inputTemp) {
    let degC = Number(((inputTemp-32)*5/9).toFixed(1));
    return degC;
};

const convertToFahrenheit = function(inputTemp) {
    let degF = Number(((inputTemp*9/5)+32).toFixed(1));
    return degF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
