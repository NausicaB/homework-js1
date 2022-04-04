console.log("ex9.js loaded...");

/**
 * Function "produsImpare" with one parameter: 
 * @param {number} n 
 * @returns the product of the first n numbers
 */

function oddNumbers(n){
    if(n % 2 === 0){
        return false;
    }
    else if(n % 2 !== 0) {
        console.log(`${n} is odd`)    
        return true;
    }   
}
oddNumbers(5);

function produsImpare(n){
    let productOdds = 1;
    let array = [];
    for(let i = 1; array.length < n; i++){
        if (oddNumbers(i) === true){
            array.push(i);
            console.log(array);
        }
    }   
    for(let i = 1; i < n; i++)
        productOdds = productOdds * array[i];
        console.log(productOdds);
        return productOdds;
}
produsImpare(10);