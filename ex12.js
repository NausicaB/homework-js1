console.log("ex12.js loaded...");

/**
 * Function "sumMinMax" with one parameter
 * @param {array} arr 
 * @returns The sum between the maximum and the minimum number
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

function minArray(array){
    let min = array[0];
    for(let i = 1; i <= array.length; i++)
        if(min > array[i]){
            min = array[i];
        }
        console.log(`The maximum value of the array is ${min}`);
        return min;
}

function sumMinMax(arr){
    let sum = maxArray(arr) + minArray(arr);
    console.log(`The sum between the maximum number and the mininum number of ${arr} is ${sum}`);
    return sum;
}
sumMinMax([-1,-2,-3])
