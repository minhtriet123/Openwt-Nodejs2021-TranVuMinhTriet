// Write a JavaScript program to combine the numbers of a given array into an array containing all combinations

const combine_number = array => {
    return array.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
}

console.log(combine_number([1, 2, 3]))