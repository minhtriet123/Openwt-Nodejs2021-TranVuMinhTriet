// Write a JavaScript program to create an object with keys generated
// by running the provided function for each key and the same values as the provided object

const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k)] = obj[k];
    return acc;
  }, {});
console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val));
