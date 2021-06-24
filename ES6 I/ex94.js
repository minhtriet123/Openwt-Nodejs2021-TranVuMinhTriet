// Write a JavaScript program to move the specified amount of elements to the end of the array.

const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
console.log(offset([1, 2, 3, 4, 5], 2));
console.log(offset([1, 2, 3, 4, 5], -2));