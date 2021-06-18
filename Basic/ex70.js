// /Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
function rotate_left(array)
{
    return [array[1], array[2], array[0]];
}

console.log(rotate_left([1,2,3]));