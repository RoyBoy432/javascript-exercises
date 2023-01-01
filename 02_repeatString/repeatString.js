const repeatString = function(string, num) {
    let repeatedString = '';
    if (num >= 0 && num%1===0) {
        for (let i = 1; i <= num; i+=1) {
            repeatedString += string;
        }
        return repeatedString;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
