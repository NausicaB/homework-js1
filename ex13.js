console.log("ex13.js loaded...");

/**
 * Function "hasDuplicates" with one parameter:
 * @param {array} arr 
 * @returns if there are any duplicate numbers in the array
 */

function hasDuplicates(arr) {
    arr.sort();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]) {
            console.log("has duplicates");
            return true;
        }
    }
    console.log("doesn't have duplicates")
    return false; 
}

hasDuplicates([1,2,3,4,5]);