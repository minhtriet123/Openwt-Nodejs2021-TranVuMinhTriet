//  Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swap(ar){
    var temp = ar[0];
    ar[0]=ar[ar.length-1];
    ar[ar.length-1]=temp;
    return ar;
}

console.log(swap([1,2,3,4]))