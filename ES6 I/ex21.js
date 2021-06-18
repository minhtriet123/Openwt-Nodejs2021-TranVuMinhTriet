// Write a JavaScript program to get every nth element in a given array.

const get_nth_elements = (ar, n) =>
    ar.filter(x => (ar.indexOf(x)+1) % n == 0);

    console.log(get_nth_elements([1, 2, 3, 4, 5, 6], 1));
    console.log(get_nth_elements([1, 2, 3, 4, 5, 6], 2));
    console.log(get_nth_elements([1, 2, 3, 4, 5, 6], 3));
    console.log(get_nth_elements([1, 2, 3, 4, 5, 6], 4));