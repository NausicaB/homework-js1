console.log("ex7.html loaded...");

/**
 * Function sumaPrime with one parameter
 * @param {number} n 
 * @returns the sum of n positive numbers
 */

function prim(n){
    if (n <= 1) {
        console.log(`${n} is not prime`);
        return false;
    }
    else if (n === 2 || n === 3) {
        console.log(`${n} is prime`);
        return true;
    }   

    else if(n > 1){ 
        for (let i = 2; i <=  Math.sqrt(n); i++) {
            if (n % i === 0 || n % Math.sqrt(n) === 0) {
                console.log(`${n} is not prime`);
                return false;
            }
        }
        console.log(`${n} is prime`);
        return true;
    }
}
prim();


function sumaPrime(n){
    let array = [];
    let sum = 0;
    for(let i = 1; array.length < n; i++) {
            if (prim(i) === true){
                array.push(i);
                console.log(array);
            }  
        }
    for(let i = 0; i < n; i++){
        sum = sum + array[i];
    }
        console.log(`Sum of the first ${n} numbers is ${sum}`);
        return sum;
    }

    sumaPrime(10);