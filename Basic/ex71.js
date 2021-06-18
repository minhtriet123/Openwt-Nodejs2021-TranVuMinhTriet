// Write a JavaScript program to check whether 1 appears in first
// or last position of a given array of integers. The array length must be greater or equal to 1

function check_one(array){
    if (array.length<1) return false;
    return (array[0]==1 || array[array.length-1]==1);
}

console.log(check_one([1,3,4]));
console.log(check_one([2,3,4]));
