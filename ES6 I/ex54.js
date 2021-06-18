//  Write a JavaScript program to initialize an array containing the numbers in the
//  specified range where start and end are inclusive with their common difference step.

const initialize_end_start_step = (end, start = 0, step = 1) => {
    return Array.from({ length: (end - start + 1) / step }).map((val,index) =>
        val = index * step + start)
}

console.log(initialize_end_start_step(5));
console.log(initialize_end_start_step(8, 3));
console.log(initialize_end_start_step(6, 0, 2));