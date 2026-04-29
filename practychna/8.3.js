let number = 5674;

function calculateDigits(num) {
    let numString = String(num);
    let result = 1;
    
    for (let i = 0; i < numString.length; i++) {
        result *= Number(numString[i]);
    }
    
    return result;
}

console.log(calculateDigits(number));