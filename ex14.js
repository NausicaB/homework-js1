console.log("ex14.js loaded...");

/**
 * Function "produsPozitive" with one parameter:
 * @param {array} arr 
 * @returns the product of positive numbers
 */


function produsPozitive(arr){
    let product = 1;
    for (let value of arr){
        if (value > 0){
            product = product * value;
        }
    }
    console.log(`The product of positive numbers is ${product}`);
    return product;
}
produsPozitive([1,2,3,4,5]);