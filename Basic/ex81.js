// Write a JavaScript program to add two digits of a given positive integer of length two.

function sumDigits(num){
    return Math.floor(num/10) + num%10;
}

console.log(sumDigits(12));