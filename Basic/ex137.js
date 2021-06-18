//  Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15

function is_bigger15(n) {
    return n >= 15 ? n : 15;
}

console.log(is_bigger15("123"));
console.log(is_bigger15("10"));
console.log(is_bigger15("5"));