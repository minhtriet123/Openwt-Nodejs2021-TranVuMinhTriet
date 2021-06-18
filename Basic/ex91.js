// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers
// (numbers that follow each other in order.) of a given array of positive integers. 

function max_sum(ar, k) {
    var max = 0;
    var sum_temp = 0;
    for (var i = 0; i < ar.length; i++) {
        for (var t = i; t <= (i + k - 1); t++) {
            sum_temp += ar[t];
        }

        if ((sum_temp > max)) {
            max = sum_temp;
        }
        sum_temp = 0;
    }
    return max;
}

console.log(max_sum([1, 2, 3, 4, 5], 2));

console.log(max_sum([2, 3, 5, 1, 6], 3));

console.log(max_sum([9, 3, 5, 1, 7], 2));
