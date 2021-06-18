// Write a JavaScript program to filter out the
// specified values from a specified array. Return the original array without the filtered values.

const filter_out = (arr, ...values) => {
    let rs = arr;
    for (let i = 0 ; i < values.length ; i++){
        rs = arr.filter( v => v != values[i]);
    }
    return rs;
}


let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(filter_out(arra1, 'a', 'c'));