// Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.

function find(n1, n2, n3) {
    var rs = n1;
    if (!(n1 == n2 || n1 == n3 || n2 == n3)) return "Not any numbers are equal.";
    if (n1 == n2 || n1 == n3 || n2 == n3) {
        if (n1 == n2 ) rs = n3;
        if (n1 == n3 ) rs = n2;
        if (n3 == n2 ) rs = n1;
    }
        return rs;
}
console.log(find(1,2,2))
console.log(find(1,1,2))
console.log(find(1,2,3))