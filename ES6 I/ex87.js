//  Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));