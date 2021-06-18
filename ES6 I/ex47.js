// . Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent

const compare = (obj1, obj2) => {
    let ar1 = Object.keys(obj1).map(n => [n, obj1[n]]),
        ar2 = Object.keys(obj2).map(n => [n, obj2[n]]),
        rs = true;
    if (JSON.stringify(ar1) !== JSON.stringify(ar2))  rs = false;
    return rs;
}
console.log(compare({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));