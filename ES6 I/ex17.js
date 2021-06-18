// Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element 
// in the collection belongs to the first group; otherwise, it belongs to the second group.

const split_group = (arr, filter) =>
    arr.reduce((acc, value, i) => (acc[filter[i] ? 0 : 1].push(value), acc), [[], []])
    
console.log(split_group([1, 2, 3, 4], [true, true, false, true]));
console.log(split_group([1, 2, 3, 4], [true, true, true, true]));
console.log(split_group([1, 2, 3, 4], [false, false, false, false]));
