//  Write a JavaScript program to find every element that exists in any of the
//  two given arrays once, using a provided comparator function
const test = (arr, fn = Boolean) => arr.every(fn);

console.log(test([4, 2, 3], x => x > 1));
console.log(test([4, 2, 3], x => x < 1));
console.log(test([1, 2, 3], y => y > 0));