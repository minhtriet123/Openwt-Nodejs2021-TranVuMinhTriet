// Write a JavaScript function that returns true if the provided
// predicate function returns true for all elements in a collection, false otherwise

const test = (arr, fn = Boolean) => arr.every(fn);

console.log(test([4, 2, 3], x => x > 1));
console.log(test([4, 2, 3], x => x < 1));
console.log(test([1, 2, 3], y => y > 0));