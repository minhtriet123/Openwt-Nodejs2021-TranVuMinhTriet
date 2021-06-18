// Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
// The string length must be greater or equal to three.

function use(str){
    if(str.length<3) return false;
    if(str.length%2==0) return false;
    var i_mid = str.length/2 -0.5;
    return str.slice(i_mid - 1, i_mid + 2);

}

console.log(use("Conmeongungoc"))