// Write a JavaScript program to concatenate two strings except their first character. 
function concatenate(str1,str2){
    return str1.substring(1,str1.length)+str2.substring(1,str2.length);
}
console.log(concatenate("Mot","Hai"));