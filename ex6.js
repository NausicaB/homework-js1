console.log("ex6.js loaded...");

/**
 * function prime with one parameter:
 * @param {number} n 
 * @returns true is n is prime and false if it's not prime
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
