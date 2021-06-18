//Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function check(a,b,c){
    if(a==b && b==c ) return 30;
    if (a==b || a==c || b==c) return 40;
    return 20;
}

console.log(check (3,3,3));
console.log(check (3,2,3));
console.log(check (3,4,6));
console.log(check (3,3,2));