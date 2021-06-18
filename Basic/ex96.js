// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

function sum_dif(a) {
    var rs = 0;
    for (var i = 0; i < a.length - 1; i++) {
        rs += Math.abs(a[i] - a[i + 1]);
    }
    return rs;
}

console.log(sum_dif([1, 2, 3, 2, -5]));