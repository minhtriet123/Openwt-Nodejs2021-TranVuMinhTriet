// Write a JavaScript program to find the
// larger value between the first or last and set all the other elements with that value. Display the new array

function maxarr(ar){
    var max=ar[0];
    if(max<ar[ar.length-1]) max=ar[ar.length-1];
    var rs=ar;
    for(var i=0; i<ar.length;i++){
        rs[i]=max;
    }
    return rs;
}

console.log(maxarr([1,2,3,5,3]));