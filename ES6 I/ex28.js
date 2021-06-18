//  Write a JavaScript program to measure the time taken by a function to execute

const time_taken = callback => {
    let performance = window.performance;;
    let t0 = performance.now()
    callback()   // <---- measured code goes between t0 and t1
    let t1 = performance.now()
    console.log((t1 - t0) + " milliseconds.")
};
console.log("Time taken: " + time_taken(() => Math.pow(2, 10)) + " ms");
console.log("Time taken: " + time_taken(() => Math.sqrt(225)) + " ms");
console.log("Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6))) + " ms");