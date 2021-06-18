//  Write a JavaScript program to check whether a given
//  string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

function string_condition(str) {
    var is_lower_case = function (symbol) {
        if ('a' <= symbol && symbol <= 'z') {
            return true;
        }
        return false;
    }

    var is_upper_case = function (symbol) {
        if ('A' <= symbol && symbol <= 'Z') {
            return true;
        }
        return false;
    }
    var i=0;
    if ( is_lower_case(str.charAt(0))) {
        i = 0;
        while(i<str.length){
            if (i%2==0 && is_upper_case(str.charAt(i))==true && is_lower_case(str.charAt(i))==false) return false;
            if (i%2!=0 && is_upper_case(str.charAt(i))==false && is_lower_case(str.charAt(i))==true) return false;
            i++;
        }
    }
    if (is_upper_case(str.charAt(0))) {
        i=0;
        while(i<str.length){
            if (i%2==0 && is_upper_case(str.charAt(i))==false && is_lower_case(str.charAt(i))==true) return false;
            if (i%2!=0 && is_upper_case(str.charAt(i))==true && is_lower_case(str.charAt(i))==false) return false;
            i++
        }
    }
    return true;
}

console.log(string_condition("abc"));
console.log(string_condition("xYzYn"));
console.log(string_condition("YzNxNxAb"));
console.log(string_condition("ACbBASHsa"));