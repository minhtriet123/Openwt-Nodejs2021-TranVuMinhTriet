// Write a JavaScript program to replace all but the last number of characters with the specified mask character

const mask = (num, hide = 4, char = "*") =>
    (num + '').slice(0, hide).replace(/./g,char) + (num + '').slice(hide);
console.log(mask(1234567890));
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, '$'));