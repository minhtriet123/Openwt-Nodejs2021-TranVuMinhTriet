// Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80. 

function compute(a,b){
    var sum = a+b;
    if (sum>=50 &&sum<=80) return 65;
    return 80;
}

console.log(compute(20,35));
console.log(compute(1,2));