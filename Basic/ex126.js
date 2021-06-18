//  Write a JavaScript program to get the largest even number from an array of integers.
function max_even(ar) {
   var max = ar[0];
    for (var i = 0; i < ar.length ; i++) {
        if (ar[i] % 2 == 0) max = Math.max(max, ar[i]);
    }
    return max;
}
console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));