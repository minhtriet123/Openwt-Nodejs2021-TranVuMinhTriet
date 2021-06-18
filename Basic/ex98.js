//Write a JavaScript program to switch case of the minimum possible number 
//of letters to make a given string written in the upper case or in the lower case. 
function check_UpperCase(char) {
    return (char === char.toUpperCase());
}
function switch_str(str) {
    var count_up = 0;
    count_down = 0;
    for (var i = 0; i < str.length - 1; i++) {
        if (check_UpperCase(str.charAt(i))) count_up++;
        else count_down++;
    }
    if (count_down > count_up) str = str.toLowerCase();
    else str = str.toUpperCase();
    return str;
}

console.log(switch_str("Write"));
console.log(switch_str("WrITe"));
console.log(switch_str("PhP"));