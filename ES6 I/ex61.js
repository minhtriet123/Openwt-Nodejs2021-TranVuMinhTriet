//  Write a JavaScript program to cast the provided value as an array if it's not one

const convert_to_arr = val =>
    Array.isArray(val) ? val : [val];

console.log(convert_to_arr('w3r'));
console.log(convert_to_arr([100]));