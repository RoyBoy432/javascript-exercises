let reverseString = function(inputString = '') {
    let reversedString="";
    //let inputStringAsArray=inputString.split("");
    for (let i = inputString.length; i>0; i-=1) {
        reversedString+=inputString[i-1];
    }

    console.log(reversedString)
    return reversedString;
}

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
