// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a 
// given original string. The length of the given string must be 3 and above

function change_str(str){
    var x3 = str.substring(str.length-3);
    x3 = x3.repeat(3);
    return str+x3;
}

console.log(change_str("mothaiba"))
