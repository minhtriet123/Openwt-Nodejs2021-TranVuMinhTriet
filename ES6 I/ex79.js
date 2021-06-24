// Write a JavaScript program to take any number of iterable objects or objects with a length property and returns the longest one


const luhn_check = num =>{
    let arr = (num + '')
    .split('');
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
}

console.log(luhn_check(6011329933655299));
console.log(luhn_check(123456789));
console.log(luhn_check(4485275742308327));