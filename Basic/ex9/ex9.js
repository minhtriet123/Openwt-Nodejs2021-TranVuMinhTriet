var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var christmas = new Date(yyyy, 11, 25);

if (mm == 11 && dd > 25)
    christmas.setFullYear(yyyy + 1);

var one_day = 1000 * 60 * 60 * 24;
var dayleft = Math.ceil(( christmas.getTime()-today.getTime() ) / one_day );
 
console.log(dayleft + " day left until Christmas");
