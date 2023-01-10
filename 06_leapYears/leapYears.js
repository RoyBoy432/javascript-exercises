const leapYears = function(inputYear) {
    let isItALeapYear = -9;
    if (typeof(inputYear) !== "number" && typeof(inputYear)!== "bigint") {
        isItALeapYear = false;
    }
    else if (inputYear%400 === 0) {
        isItALeapYear = true;
    }
    else if (inputYear%100 === 0) {
        isItALeapYear = false;
    }
    else if (inputYear%4 === 0) {
        isItALeapYear = true;
    }
     
    else {
        isItALeapYear = false;
    }

    return isItALeapYear;
};

// Do not edit below this line
module.exports = leapYears;
