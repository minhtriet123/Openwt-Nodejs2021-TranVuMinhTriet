// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function check_mul(num){
    return (num%3==0)||(num%7==0);
}

console.log(check_mul(21));
console.log(check_mul(20));
