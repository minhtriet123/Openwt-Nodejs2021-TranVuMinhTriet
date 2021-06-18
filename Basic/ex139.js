// Write a JavaScript program to find the position of a rightmost round number in an array of integers.
// Returns 0 if there are no round number

function find(ar){
    for ( var i=ar.length-1; i>=0; i--){
        if(ar[i]%10==0) return ar.indexOf(ar[i]);
    }
    return 0;
}

console.log(find([1, 22, 30, 54, 56]));
console.log(find([1, 22, 32, 54, 56]));
console.log(find([1, 22, 32, 54, 50]));