// Write a JavaScript program to check whether a given number is presents in the range 40..10000.
function check(num) {
    if (num >= 40 && num <= 10000) return true;
    return false;
}
console.log(check(10));

console.log(check(1000));