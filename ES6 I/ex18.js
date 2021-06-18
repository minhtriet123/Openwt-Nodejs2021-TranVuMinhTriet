// Write a JavaScript program to remove specified elements from the left of a given array of elements. 
const remove_specified = (arr, n = 1) =>
    (n > arr.length) ? "n > length of array" : arr.slice(n);

console.log(remove_specified([1, 2, 3]));
console.log(remove_specified([1, 2, 3], 1));
console.log(remove_specified([1, 2, 3], 2));
console.log(remove_specified([1, 2, 3], 4));