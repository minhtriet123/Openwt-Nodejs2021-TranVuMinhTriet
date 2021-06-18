// / Write a JavaScript program to check whether a string starts with 'Java' and false otherwise. 

function check(string) {
    var temp = string.substring(0, 4);
    
    return (temp == "Java");
}

var string = "Javane";

console.log(check(string));

string = "abc";

console.log(check(string));