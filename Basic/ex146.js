//  Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

function sum_cubes(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) { 
        sum += Math.pow(i,3);
    }
    return sum;
}


console.log(sum_cubes(3));
console.log(sum_cubes(4));