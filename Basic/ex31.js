// Write a JavaScript program to find the largest of three given integers

function max (a,b,c){
    var max = a;
    if(max<b) max=b;
    if(max<c) max=c;
    return max;
}

console.log(max(3,5,2));