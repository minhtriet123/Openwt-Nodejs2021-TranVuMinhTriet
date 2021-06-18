// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" 
// presents in the string return the string without "Script" otherwise return the original one. 


function check_str(str) {
    var check = "Script";
    var t = str.substring(4,10);
    if (t==check) {

        return str.replace("Script",""); 
    
    }
    return str;
}

var test = "abcdScriptabc";
console.log(check_str(test));