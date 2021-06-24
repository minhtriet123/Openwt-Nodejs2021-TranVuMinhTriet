// Write a JavaScript program to group the elements of a given array based on the given function.

const group_elements = (ar, fn) => {
    if (typeof (fn) === 'function') {
        return ar.reduce((acc, v,i) => (acc[fn(v)] = acc[fn(v)].concat(ar[i]), acc), {})
    }
    return 'The second input is not a function';
}


console.log(group_elements([6.1, 4.2, 6.3], Math.sqrt));
console.log(group_elements([6.1, 4.2, 6.3], Math.floor));
console.log(group_elements(['one', 'two', 'three'], 'length'));
/chua xong