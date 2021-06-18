// Write a JavaScript program to count the number of vowels in a given string.

function count_vowels(num_str){
    return num_str.replace(/[^aeiou]/g, '').length;
}

console.log(count_vowels("Python"));
console.log(count_vowels("w3resource.com"));