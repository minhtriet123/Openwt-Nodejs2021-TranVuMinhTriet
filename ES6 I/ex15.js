// Return the minimum-maximum value of an array, after applying the provided function to set comparing rule

const mini_maxi_apply = (arr, compare = (a, b) => a - b) => {
    return arr.reduce((a, b) => compare(a, b) < 0 ? a : b);
}
console.log(mini_maxi_apply([1, 3, 2])); 
console.log(mini_maxi_apply([10, 30, 20], (a, b) => b - a));  
console.log(mini_maxi_apply(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => b.age - a.age)); 