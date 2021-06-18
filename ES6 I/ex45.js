// Write a JavaScript program to split values into two groups, if an element in filter is truthy, the corresponding element
// in the collection belongs to the first group; otherwise, it belongs to the second group.

const split_group = (arr, truefalse) =>
    arr.reduce((acc, val, i) => ((acc[truefalse[i] ? 1 : 0].push(val)), acc), [[], []])

console.log(split_group(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));

