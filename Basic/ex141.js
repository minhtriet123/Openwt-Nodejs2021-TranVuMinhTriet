// Write a JavaScript program to find the number of elements which presents in both of the given arrays.    

function num_elements(a1, a2) {
    var count = 0;
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] === a2[i]) count++;
    }
    return count;
}
console.log(num_elements([1,2,3,4], [1,2,3,4]));
console.log(num_elements([1,2,3,4], [1,2,3,5]));
console.log(num_elements([1,2,3,4], [11,22,33,44]));