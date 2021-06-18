//  Write a JavaScript program to change the capitalization of all letters in a given string.

function change_capitalization(str){
    var isLowerCase = function(str){
        return str == str.toLowerCase() && str != str.toUpperCase();
    }
    var str_ar = str.split('');
    for ( var i =  0 ; i< str.length ; i++) {
        if(isLowerCase(str_ar[i])) str_ar[i] = str_ar[i].toUpperCase();
        else str_ar[i] = str_ar[i].toLowerCase();
    }
    return str_ar.join('');
}


console.log(change_capitalization("w3resource"));
console.log(change_capitalization("Germany"));