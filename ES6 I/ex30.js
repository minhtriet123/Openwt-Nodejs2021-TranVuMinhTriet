// Write a JavaScript program to filter out the element(s) of a given array, that have one of the specified values.

const filter_out = (ar, ...give_num) =>
    ar.filter(v => !give_num.includes(v));


console.log(filter_out([2, 1, 2, 3], 1, 2));
console.log(filter_out([2, 1, 2, 3], 3));