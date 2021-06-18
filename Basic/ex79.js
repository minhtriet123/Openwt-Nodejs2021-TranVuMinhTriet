// Write a JavaScript program to test whether a given
// array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

function testArr(ar) {
    var a = ar[0],
        b = ar[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(testArr([1, 2]));

console.log(testArr([30, 40]));

console.log(testArr([30]))

console.log(testArr([40, 40]))