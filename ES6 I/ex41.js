// Write a JavaScript program to create an object from the given key-value pairs.

const arr_to_obj = arr => {
    return arr.reduce((acc, obj) => (acc[obj[0]] = obj[1], acc), {})
}

console.log(arr_to_obj([['a', 1], ['b', 2]]));
console.log(arr_to_obj([[1, 10], [2, 20], [3, 30]]));