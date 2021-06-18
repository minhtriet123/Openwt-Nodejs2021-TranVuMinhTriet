// Write a JavaScript program to extract out the values at the specified indexes from a specified array

const specified_indexes = (arr , arr_index) => {
    let result = [];
    for (index of arr_index){
        result.push(arr[index]);
    }
    return result;
}

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(specified_indexes(arra1, [1,3]));