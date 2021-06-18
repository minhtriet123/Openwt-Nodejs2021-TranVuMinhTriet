//  Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

function find_max_lower(n) {
    var rs = 0;
    var i = 0;
    while (rs < n) {
        rs += i;
        i++
    }
    return rs;
}
console.log(find_max_lower(11))
console.log(find_max_lower(15))