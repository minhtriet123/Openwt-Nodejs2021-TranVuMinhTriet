// Write a JavaScript program to check two given non-negative integers 
// that whether one of the number (not both) is multiple of 7 or 11

function check_mul_whether(a, b) {
    if (a < 0 || b < 0) return "Negative";
    if ((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0)) return false;
    if ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0)) return true;
    return false;
}

console.log(check_mul_whether(1,2));

console.log(check_mul_whether(1,-92));

console.log(check_mul_whether(21,7));

console.log(check_mul_whether(21,1));