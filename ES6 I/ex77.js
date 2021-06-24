//  Write a JavaScript program to iterate over all own properties of an object, running a callback for each one.

const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key]));

const print_values = v => console.log(v)
forOwn({ foo: 'bar', a: 1 }, print_values);