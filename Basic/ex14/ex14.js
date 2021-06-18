// Write a JavaScript exercise to get the extension of a filename. 

function getFilename(name){
    return name.split('.').pop();
}

var filename1 = "test.html";
var filename2 = "abc.js";

console.log(getFilename(filename1));
