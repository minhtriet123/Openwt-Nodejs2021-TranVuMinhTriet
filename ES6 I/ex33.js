// Write a JavaScript program to get a random number in the specified range. 


const random_range = (min,max) =>  Math.random() * (max - min) + min;

console.log(random_range(2, 10)); 