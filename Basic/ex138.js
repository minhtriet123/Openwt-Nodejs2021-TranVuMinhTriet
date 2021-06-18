//Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.
function rs_16bit(n) {
    var
        bit = n.toString(16);
    var newbit = bit.split("").reverse().join("");
    return parseInt(newbit, 16);
}

console.log(rs_16bit(12345));
console.log(rs_16bit(10));
console.log(rs_16bit(5));