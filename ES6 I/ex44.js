// Write a JavaScript program to remove falsey values from a given array.

// array.filter(Boolean)  ==>  to get truth value in array

console.log([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34].filter(Boolean));
console.log([false, NaN, 'e' * 23].filter(Boolean));