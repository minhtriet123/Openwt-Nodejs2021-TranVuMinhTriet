// Write a JavaScript program to remove all characters from a given string that appear more than once

function rm(str) {
    var arr_char = str.split("");
    var rs = [];
    for (var i = 0; i < arr_char.length; i++) {
        if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i])) {
            rs.push(arr_char[i]);
        }
    }
    return rs.join("");
}
console.log(rm("abcdabc"));
console.log(rm("python"));
console.log(rm("abcabc"));
console.log(rm("1365451"));