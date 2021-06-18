
var today = new Date();

var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

if (dd<10) dd = "0"+ dd;
if (mm<10) mm = "0"+ mm;

console.log(mm+"-"+dd+"-"+ yyyy);
console.log( mm+"/"+dd+"/"+yyyy);
console.log( dd + "-" + mm + "-" +yyyy);
console.log(dd+"/"+mm+"/"+yyyy);