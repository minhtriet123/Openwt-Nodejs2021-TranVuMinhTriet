// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.

function max_dif_in_ar(ar) {

    var max = 0;
    var temp = 0;
    for (var i = 0; i < ar.length; i++) {
        for (var z = i + 1; z < ar.length; z++) {
            temp = Math.abs(ar[i] - ar[z]);
            if (max<temp) max = temp;
            temp = 0;
        }
    }
    return max;
}

console.log(max_dif_in_ar([1, 2, 3, 8, 9]))
console.log(max_dif_in_ar([1, 2, 3, 18, 9]))
console.log(max_dif_in_ar([13, 2, 3, 8, 9]))