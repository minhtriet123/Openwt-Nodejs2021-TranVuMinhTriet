// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function check (num){
    if (Math.abs(400-num)==20 || Math.abs(100-num)==20) return true;
    return false;
}

console.log(check(20));

console.log(check(80));

console.log(check(100));