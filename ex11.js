console.log("ex11.js loaded...");

/**
 * Function "maxArray" with one parameter
 * @param {array} array 
 * @returns the maximum value of the array
 */

function maxArray(array){
    let max = array[0];
    for(let i = 1; i <= array.length; i++)
        if(max < array[i]){
            max = array[i];
        }
        console.log(`The maximum value of the array is ${max}`);
        return max;
}
maxArray([1,28,98,0,67,42]);