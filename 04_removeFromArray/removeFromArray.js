let removeFromArray = function(inputArray = [], ...itemsToRemove) {
    let outputArray=[...inputArray]; let myIndex;
    //console.log(itemsToRemove)
    for (let item of itemsToRemove) {
        //console.log(`Outer loop: ${thing}.`);
        for (let thing of inputArray) {
            if (item === thing) {
                myIndex = inputArray.indexOf(thing);
                //console.log(myIndex);
                //console.log(inputArray);
                delete outputArray[myIndex];
                //console.log(inputArray);
                console.log(`Removed ${inputArray[myIndex]}.`);
            }    
            else {
                continue;
            }
            
        }
    }
    console.log(outputArray);
    let cleanedOutputArray = [];
    for (let i = 0; i<outputArray.length; i+=1) {
        if (outputArray[i]===undefined) {
            continue;
        }
        else {cleanedOutputArray.push(outputArray[i])
        }
    }
    return cleanedOutputArray;
}

// Do not edit below this line
module.exports = removeFromArray;
