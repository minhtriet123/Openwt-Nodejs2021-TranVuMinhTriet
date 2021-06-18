// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
// The string length must be greater than or equal to 1.

function change_string(string) {
    var rs = " length of string must to >= 1";
    if (string.length < 1) return rs;

    var first = string.charAt(0);
    var last = string.charAt(string.length-1);

    rs = last.concat(string.substring(1, string.length - 1));
    rs = rs.concat(first);
    return rs;

}
var str = "daylatest";
console.log(change_string(str));