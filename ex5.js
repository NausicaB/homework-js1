console.log("ex5.js loaded...");

/**
 * Function suma with o parameter:
 * @param {number} n Number to add
 * @returns the sum of first n positive numbers 
 */

function suma(n) {
    let sum = 0;
    for(let a = 1; a <= n; a++) {
        sum = sum + a;
    }
    return sum;
}
