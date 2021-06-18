// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6

function endScr(str){
    if(str.length<6) return false;
    if(str.substring(str.length-6)=="Script") return true;
    return false;
}

console.log(endScr("abcScript"));
console.log(endScr("abcScriptaa"))