// Create an array of key-value pair arrays from a given object

const obj_to_arr = obj => {
    let array_result = Object.keys(obj).map(n => [n, obj[n]] );
    return array_result;
}
console.log(obj_to_arr({ a: 1, b: 2 }));
console.log(obj_to_arr({ a: 1, b: 2, c: 3 }));