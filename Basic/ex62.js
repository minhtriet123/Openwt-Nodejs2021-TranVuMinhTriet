// Write a JavaScript program to move
// last three character to the start of a given string. The string length must be greater or equal to three

function move(str){
    if(str.length<3) return false;
    return rs = str.substring(str.length-3) + str.substring(0,str.length-3);
}

console.log(move("Conmeongungoc"))