// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive

function in_range(a,b){
    if ( ((a >= 40 && a <=60) || (a>=70 && a<=100)) && ((b >= 40 && b <=60) || (b>=70 && b<=100)) ) return true;
    return false;
}

console.log(in_range(40,200));
console.log(in_range(45,90));