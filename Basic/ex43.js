// Write a JavaScript program to check from three given
// numbers (non negative integers) that two or all of them have the same rightmost digit

function check(a,b,c) {
    if (a < 0 || b < 0 || c < 0) return "negative";
    if ((a % 10 == b % 10) || (b % 10 == c % 10) || (c % 10 == a % 10)) return true;
    return false;
}

console.log(check(32, 2, 13));
console.log(check(12, 3, 5));
console.log(check(12, -3, 5));