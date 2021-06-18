// Write a JavaScript program to create new string with first 3 
// characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case. 

function change (str){
    if(str.length<3) return str.toUpperCase();
    return str.toLowerCase();
}

console.log(change("na"));
console.log(change("ANcccNNN"));