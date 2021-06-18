// Write a JavaScript program to concatenate two strings and return the result.
// If the length of the strings are not same then remove the characters from the longer string. 

function concatenate(str1,str2){
    var i = (str1.length-str2.length)
    if(i==0){
        return str1.substring(0,str1.length)+str2.substring(0,str2.length);
    }
    if(i<0){
        return str1.substring(0,str1.length)+str2.substring((-i),str2.length);
    }
    return str1.substring(i,str1.length)+str2.substring(0,str2.length);
}
console.log(concatenate("Mot","Hai"));
console.log(concatenate("Mota","Hai"));
console.log(concatenate("Mot","Haia"));