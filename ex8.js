console.log("ex8.js loaded...");

/**
 * Function "invers" with one parameter:
 * @param {number} n 
 * @returns the inverse of n

 */

function invers(n){
    let array = [];
    for (let i = 0; n !=0; i++) {
        array[i]= n % 10;
        n = Math.floor(n / 10);
    }
    console.log(array);

    let inv = 0;
    let m = array.length - 1; 
    for(let i = 0; i < array.length; i++){
        inv = inv + array[i]*Math.pow(10, m);
        m = m - 1;
    } 
    console.log(inv);
    return inv;
}
invers(12345);