//  Converts a specified number to an array of digits

const specified_number = (num) => {
    var ar = num.toString(10).replace(/\D/g, '0').split('').map(n => n * 1);
    return ar;
}

console.log(specified_number(123));
console.log(specified_number(1230));