// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

const sum = (ar_obj, fn) => {
    let array_value = ar_obj.map(typeof fn === 'function' ? fn : val => val[fn]);
    return array_value.reduce((acc, val) => acc + val , 0)
}

console.log(sum([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(sum([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));