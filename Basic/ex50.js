//Write a JavaScript program to capitalize the first letter of each word of a given string.

function upperFirstChar(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperFirstChar("hehe"));