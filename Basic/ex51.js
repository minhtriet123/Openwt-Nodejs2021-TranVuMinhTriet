// Write a JavaScript program to convert a given number to hours and minutes.

function cvHoursMinutes(num){
    var h=0;
    var m=0;
    h= Math.floor(num/60);
    m = num - h*60;
    rs = h + ":" + m;
    return rs;
}

console.log(cvHoursMinutes(25));

console.log(cvHoursMinutes(67));