// Write a JavaScript program to find the kth greatest element of a given array of integers 

function find_kth(numArray,k){
    numArray.sort((a, b) => b-a);
    return numArray[k-1];
}
console.log(find_kth([5,4,3,2,1],1));
console.log(find_kth([2,4,6,8,6,4,2,1],3));