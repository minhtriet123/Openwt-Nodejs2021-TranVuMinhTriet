// Write a JavaScript program to create 
// a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

function checkPy(string) {
    var temp = string.substring(0, 2);
    if (temp == "Py") return string;
    else {
        temp = "Py";
        return temp.concat(string);
    }
}
var string = "Pyabc";
console.log(checkPy(string));

string = "xyz";
console.log(checkPy(string));
