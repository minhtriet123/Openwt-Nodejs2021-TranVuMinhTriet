// Write a JavaScript program to check whether a given string represents a correct sentence or not.
// A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.)

function correct_sentence(str){
    return (str.charAt(0)==str.charAt(0).toUpperCase() && str.charAt(str.length-1)==".");
}
console.log(correct_sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(correct_sentence("This tool will help you write better English and efficiently corrects texts"));            
console.log(correct_sentence("this tool will help you write better English and efficiently corrects texts."));