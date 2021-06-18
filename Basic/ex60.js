// Write a JavaScript program to create a new string without the first and last character of a given string.

function remove_first_last(str){
    return str.substring(1,str.length-1);
}
console.log(remove_first_last("Mot Hai Ba"));