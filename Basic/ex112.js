//  Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

function find_zero(n) {
    var result = 0;
    // only number > 5 has trailing
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(find_zero(8))
console.log(find_zero(9))
console.log(find_zero(10))
console.log(find_zero(4))