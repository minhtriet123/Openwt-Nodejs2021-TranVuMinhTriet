// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

function check_char (str, char){
    for (var i = 1; i<=3; i++) {
        var t = str.charAt(i);
        if(t==char) return true;
    }
    return false;
}

console.log(check_char("netflixxxxxxx","t"));
console.log(check_char("netflixxxxxxx","x"));