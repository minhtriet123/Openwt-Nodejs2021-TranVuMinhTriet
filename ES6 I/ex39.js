// /Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
const remove_with_key = (obj, keys) => {
    let key_obj = Object.keys(obj);
    key_obj = key_obj.filter(v => !keys.includes(v)); // filter out keys want to remove;
    let result = key_obj.reduce((acc, key) => (acc[key] = obj[key] , acc), {});
    return result;
}

console.log(remove_with_key({ a: 1, b: '2', c: 3 }, ['b','c']));
console.log(remove_with_key({ a: 1, b: 2, c: 3 }, ['c']));