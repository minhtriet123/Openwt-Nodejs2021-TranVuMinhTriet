// Write a JavaScript program to create a new string using the first and last n characters from a given sting.
// The string length must be greater or equal to n

function use(str,n){
    if(str.length < n) return false;
    return str.substring(0,n)+str.substring(str.length-n);
}

console.log(use("JavaScript",2));