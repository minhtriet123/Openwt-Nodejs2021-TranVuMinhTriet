// Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned

const nthArg = n => (...args) => args.slice(n)[0];
const third = nthArg(2);

console.log(third(1, 2, 3))
const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));