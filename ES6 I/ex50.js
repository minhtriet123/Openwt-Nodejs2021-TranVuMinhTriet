// Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.

const hours_am_pm = num_hours => {
    if (num_hours < 0 || num_hours > 24) return "Hours is only inrange 0 to 24 h";

    let apm = ((num_hours - 12) <= 0 ? " am" : " pm");
    let hours_rs = '' + ((num_hours - 12) <= 0 ? num_hours : num_hours - 12) + apm;
    return hours_rs;
}
console.log(hours_am_pm(0));
console.log(hours_am_pm(11));
console.log(hours_am_pm(13));
console.log(hours_am_pm(25));