console.log("ex1.js loaded...");

/**
 * funtion "equals" with two parameters: 
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns true if the numbers are equal
 * false if the numbers are different
 */

function equals(a, b) {
    if (a === b) {
        console.log("The numbers are equal");
        return true;
    }
    console.log("The numbers are not equal")
    return false;
}
