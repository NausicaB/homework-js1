console.log("ex10.js loaded...");

/**
 * Function "contains" with 2 parameters
 * @param {array} arr 
 * @param {number} x 
 * @returns true if x is part of the array
 */

function contains(arr, x){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === x){
            console.log(`${x} is part of ${arr}`);
            return true;
        }
    }
    console.log(`${x} is not part of ${arr}`);
    return false;
}
contains([1,2,3,4,5],6);