console.log("ex15.js loaded...");

/**
 * Function "palindrom" with one parameter:
 * @param {string} firstValue 
 * @returns If it's palindrome (true/false)
 */

function palindrom(firstValue){
    let finalValue = "";
    for(let i = firstValue.length - 1; i >= 0 ; i--){
        finalValue = finalValue + firstValue.charAt(i);
    }
    if (firstValue === finalValue){
        console.log(`${firstValue} is palindrome`);
        return true;
    }
    console.log(`${firstValue} is not palindrome`);
    return false;
}
palindrom("12321");