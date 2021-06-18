// Write a JavaScript program to create an array of prefix sums of the given array.

function prefix_sum(ar) {
    for (var i = 1; i < ar.length; i++) {
        ar[i] += ar[i - 1];
    }
    return ar;
}
console.log(prefix_sum([1, 2, 3, 4, 5]));

console.log(prefix_sum([1, 2, -3, 4, 5]));
