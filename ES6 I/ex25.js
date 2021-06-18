//  Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.

const create_two_arr = (ar1, ar2) =>
    ar1.reduce((acc, i) => acc.concat(ar2.map(j => [i, j])), [])

console.log(create_two_arr([1, 2], ['a', 'b']));
console.log(create_two_arr([1, 2], [1, 2]));
console.log(create_two_arr(['a', 'b'], ['a', 'b']));
