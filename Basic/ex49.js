//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

function replace(str){
    var s = str.split('');
    for (var i =0; i< str.length;i++){
        if(s[i]=="z") s[i]="a";
        else if(s[i]=="Z") s[i]="Z";
        else if(s[i]==" ") s[i]= " ";
        else s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
    }
    return s.join('');
}

console.log(replace("PYTHON"));
console.log(replace("triet"));