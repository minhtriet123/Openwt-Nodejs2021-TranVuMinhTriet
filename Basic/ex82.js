// Write a JavaScript to add two positive integers without carry.

function add_positive(n1, n2) {
    var a = (n1 + n2) % 10;
    var b = (Math.floor(n1 / 10) + Math.floor(n2 / 10)) % 10;
    var c = (Math.floor(n1 / 100) + Math.floor(n2 / 100)) % 10;
    return c*100 + b*10 + a;



}

console.log(add_positive(12, 911))
console.log(add_positive(200, 900))