// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.

function sort_length(str_ar) {
    for (var i = 0; i < str_ar.length; i++) {
        for (var j = i + 1; j < arra.length; j++) {
            if (str_ar[i].length > str_ar[j].length) {
                var temp = str_ar[i];
                str_ar[i] = str_ar[j];
                str_ar[j] = temp;
            }
        }
    }
    return str_ar;
}

var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];

console.log(sort_length(["xyz","acd","aa","bb","zzz","", "a","b"]));