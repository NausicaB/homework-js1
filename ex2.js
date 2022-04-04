console.log("ex2.js loaded...");

/**
 * Function "compare" with 2 parameters:
 * 
 * @param {number} nr1 The first number to add
 * @param {number} nr2 The second number to add
 * @returns -1 if first number is smaller than the second one
 * 0 if the 2 numbers are equal
 * 1 if the the first number is higher than the second one
 */

function compare(nr1, nr2) {
    if(nr1 < nr2) {
        return -1;
    }
    else if(nr1 === nr2) {
        return 0;
    }
    else if(nr1 > nr2){
        return 1;
    } 
}