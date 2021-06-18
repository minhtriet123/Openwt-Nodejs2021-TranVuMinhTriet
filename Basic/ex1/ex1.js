var today = new Date();
var listDay = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Sartuday" ];
var dayNum = today.getDay();
var dayName = listDay[dayNum];
console.log("Today is: " + dayName);

var hours = today.getHours();
var apm = "";
var mins = today.getMinutes();
var seconds = today.getSeconds();
if (0 <= hours <= 12 ) {
    apm = " AM ";
}
else {
    hour = hours - 12;
    apm = " PM ";
}
console.log("Current time is: "+ hours + apm + " : " + mins + " : " + seconds);