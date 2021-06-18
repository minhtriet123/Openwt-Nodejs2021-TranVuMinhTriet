//  Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

function copy(str,n){
    if(n<0) return false;
    return str.repeat(n);
}

console.log(copy("na",3))