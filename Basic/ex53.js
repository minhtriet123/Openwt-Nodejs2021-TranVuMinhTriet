// Write a JavaScript program to check whether the characters a and b
// are separated by exactly 3 places anywhere (at least once) in a given string

function check(str){
    if ( /a...b/.test(str) || /b...a/.test(str) ) return true;
    return false;
}

console.log(check("conganguba"));
console.log(check("congavnguba"));