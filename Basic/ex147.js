// Write a JavaScript program to compute the sum of all digits that occur in a given string.
function sum_digit_str(str) {
    var rs = str.split('');
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (/[0-9]/.test(rs[i])) sum += parseInt(rs[i]);
    }
    return sum;
}

console.log(sum_digit_str("abcd12efg9"))
console.log(sum_digit_str("w3resource"))