// Write a JavaScript program to create a new string from a given string taking the last 3 
// characters and added at both the front and back. The string length must be 3 or more.


function change_string(string) {
    var rs = " length of string must to >= 3";
    if (string.length < 3 )return rs;


    var last = string.substring(string.length - 3, string.length);

    rs = last.concat(string);
    rs = rs.concat(last);
    return rs;

}
var str = "daylatest";
console.log(change_string(str));