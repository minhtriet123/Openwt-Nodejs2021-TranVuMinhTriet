// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3

function testArr(ar) {
    if (ar.length != 2) return "Length of array must be 2";
    return (ar[0] == 1 || ar[1] == 1 || ar[0] == 3 || ar[1] == 3)
}

console.log(testArr([1,2,3]));

console.log(testArr([1,4]))

console.log(testArr([2,3]))

console.log(testArr([2,4]))