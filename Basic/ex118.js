//  Write a JavaScript program to check whether a given number is in a given range.

function inrange(x, y, z) {
    return x <= y && y <= z;
}

console.log(inrange(1, 2, 3));
console.log(inrange(1, 2, -3));
console.log(inrange(1.1, 1.2, 1.3));