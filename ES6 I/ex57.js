//  Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function

const compute_average = (ar, fn) => {
    let ave;
    if (typeof fn === 'function') {
         ave = Object.keys(ar).reduce( (acc , v) => (ar[v] + acc),0) / ar.length
    }

    return ' The second input must be a Function';
}

console.log(compute_average([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(compute_average([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));

/sai