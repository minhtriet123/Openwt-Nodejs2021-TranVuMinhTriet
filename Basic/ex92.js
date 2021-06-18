//  Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.

function max_dif(ar, k) {
    k = 2
    var max = 0;
    var sum_temp = 0;
    for (var i = 0; i < ar.length; i++) {
        sum_temp = Math.abs(ar[i] - ar[i + 1]);
        if ((sum_temp > max)) {
            max = sum_temp;
        }
        sum_temp = 0;
    }
    return max;
}

console.log(max_dif([1, 2, 3, 4, 5]));

console.log(max_dif([2, 3, 5, 1, 6]));

console.log(max_dif([9, 3, 5, 1, 7]));
