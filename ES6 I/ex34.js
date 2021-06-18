//  Write a JavaScript program to get a random integer in the specified range.

const random_Integer_range = (min,max) =>  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

console.log(random_Integer_range(2, 10)); 