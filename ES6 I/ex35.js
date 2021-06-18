// Write a JavaScript program to get an array of given n random integers in the specified range
const random_Integer_range = (min,max,n=1) => {
    let rs = [];
    for ( let i = 1; i<=n;i++){
        rs.push(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)));
    }
    return rs;
} 

console.log(random_Integer_range(2, 10,3)); 