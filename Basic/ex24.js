// Write a JavaScript program 
// to create a new string from a given string with the first character of the given string added at the front and back
function change_string(string) {
 

    var first = string.charAt(0);
    

    rs = first.concat(string.substring(0, string.length));
    rs = rs.concat(first);
    return rs;

}
var str = "daylatest";
console.log(change_string(str));