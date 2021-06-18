// Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
const digit3_to_digit6 = digit3 => {

    let digit_ar = digit3.slice(digit3.startsWith('#') ? 1 : 0).split('');
    digit_ar = digit_ar.map(x => x + x);
    return '#' + digit_ar.join('');
}

console.log(digit3_to_digit6('#03f'));
console.log(digit3_to_digit6('#05a'));