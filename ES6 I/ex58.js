// Split values into two groups according to a predicate function

const predicate = (arr, fn) => {
    return arr.reduce((acc, v) => ((acc[fn(v) ? 0 : 1].push(v)), acc), [[], []]);
}

console.log(predicate(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));