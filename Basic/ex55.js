//Write a JavaScript program to check whether a given string contains equal number of p's and t's

function equalpt(str){
    var p = str.replace(/[^p]/g, "").length;
    var t = str.replace(/[^t]/g, "").length;
    if(p==t) return true;
    return false;
}

console.log(equalpt("pppttt"));
console.log(equalpt("acspdfatdt"));