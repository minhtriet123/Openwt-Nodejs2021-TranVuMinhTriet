// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function remove_character(string, index) {
    var temp1 = string.substring(0,index);
    var temp2 = string.substring(index+1,string.length);
    return temp1.concat(temp2)
}

var test = "Don't Touch To Me";

console.log(remove_character(test,4));