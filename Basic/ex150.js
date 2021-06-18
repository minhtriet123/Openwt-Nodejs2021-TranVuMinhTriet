// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length

function swap_pairs(n) {

    var ar = ("" + n).split('');

    if (ar.length % 2 != 0) return false;
    var i = 0;
    while (i < ar.length) {
        var temp = ar[i];
            ar[i] = ar[i+1];
            ar[i+1] = temp;
        i+=2;
    }
    return ar.join('');
}

console.log(swap_pairs(15));
console.log(swap_pairs(1234));
console.log(swap_pairs(123456));
console.log(swap_pairs(12345));