// Write a JavaScript program to create a deep clone of an object


const clone = obj =>
    obj
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = clone(a); // a !== b, a.obj !== b.obj
console.log(b)