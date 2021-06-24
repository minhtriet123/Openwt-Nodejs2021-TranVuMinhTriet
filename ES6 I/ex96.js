// Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object. 

const pick = (obj, keys) => keys.reduce((acc, k) => (acc[k]=obj[k],acc),{}) 

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));