// Write a JavaScript code to divide a given array of positive integers into two parts.
// First element goes to first part, second element goes to second part,
// and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two. 

function store(ar){
    var first = ar.filter(n => ar.indexOf(n)%2==0 );
        second = ar.filter( n =>ar.indexOf(n)%2==1 );
        rs = [first.reduce((a, b) => a + b, 0),second.reduce((a, b) => a + b, 0)];
    return rs;
}   

console.log(store([1,2,3,4]));
console.log(store([1, 3, 6, 2, 5, 10]));
