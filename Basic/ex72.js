// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3

function check_first_last(array){
    if (array.length<3) return false;
    return (array[0]==array[array.length-1]);
}

console.log(check_first_last([1,2,3,4]));

console.log(check_first_last([1,2,3,1]))