// Write a JavaScript program to swap two halves of a given array of integers of even length. 

function swap_even(ar) {
    if (ar.length % 2 != 0) return false;
    var j = 1;
    for (var i = 0; i < ar.length / 2; i++) {
        var temp = ar[i];
        ar[i] = ar[(ar.length / 2 - 1) + j];
        ar[((ar.length / 2) - 1) + j] = temp;
        j++;
    }
    return ar;
}
console.log(swap_even([1,2,3,4,5,6]))
console.log(swap_even([1,2,3,4,5,6,7]))