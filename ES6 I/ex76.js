// Write a JavaScript program to execute a provided function once for each array element, starting from the array's last element.

const forEachRight = (arr, callback) =>
  arr
    .reverse()
    .forEach(callback);
forEachRight([1, 2, 3, 4], val => console.log(val));