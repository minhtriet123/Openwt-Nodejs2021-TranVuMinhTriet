// Write a JavaScript program to generate a random hexadecimal color code
const random_hexadecimal = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}
 console.log(random_hexadecimal())