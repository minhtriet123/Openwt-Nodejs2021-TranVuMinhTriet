// Write a JavaScript program to extract the first half of a string of even length

function extract(str){
    var count = Math.floor(str.length/2);
    return str.substring(0,count);
}

console.log(extract("DayLaMotChuoi"));