//  Write a JavaScript program to find all elements in a given array except for the first one. 
//  Return the whole array if the array's length is 1. 

const rm_first = (ar) =>
    (ar.length > 1 ) ? ar.slice(1) : ar;


console.log(rm_first([1, 2, 3]))