// Write a JavaScript program to map the values of an array to an object using a function, where the key-value
// pairs consist of the original value as the key and the mapped value. 

const mapKeys = (arr, fn) =>
  arr.reduce((acc, k) => {
    acc[k] = fn(k);
    return acc;
  }, {});
console.log(mapKeys([1, 2, 3],a => a * a));