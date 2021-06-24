// . Write a JavaScript program to create a new string
// with the results of calling a provided function on every character in the calling string

const mapString = (str, fn) =>
    str.split('').map(v => fn(v)).join('')

    console.log(mapString('Javascript exercises', c => c.toUpperCase()));
    