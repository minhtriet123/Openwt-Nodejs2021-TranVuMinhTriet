// Write a JavaScript program to count the occurrences of a value in an array.

const count_val_array = (arr, val) =>
    arr.reduce((acc, v) => (v === val ? acc + 1 : acc), acc = 0)

console.log(count_val_array([1, 1, 2, 1, 2, 3], 1));
console.log(count_val_array([1, 1, 2, 1, 2, 3], 2));
console.log(count_val_array([1, 1, 2, 1, 2, 3], 3));

