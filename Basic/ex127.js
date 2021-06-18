// Write a JavaScript program to reverse the order of the bits in a given integer
function rs_bit(n) {
    var
        bit = n.toString(2);
    var newbit = bit.split("").reverse().join("");
    return parseInt(newbit, 2);
}

console.log(rs_bit(56));
console.log(rs_bit(234));