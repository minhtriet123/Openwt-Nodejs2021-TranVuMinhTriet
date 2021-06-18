// Write a JavaScript program to find the larger number from 
// the two given positive integers, the two numbers are in the range 40..60 inclusive.

function inrange(num) {
    return (num >= 40 && num <= 60) ? true : false;

}
function larger(a, b) {
    var rs = "numbers are not in range";
    if (!(inrange(a) && inrange(b))) return rs;
    if (a > b) return a;
    else return b;
}

console.log(larger(34,46));
console.log(larger(44,57));