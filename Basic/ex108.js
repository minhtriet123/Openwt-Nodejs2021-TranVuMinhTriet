// Write a JavaScript program to create the dot products of two given 3D vectors
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
function dot(v1, v2) {
    var result = 0;
    for (var i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
    return result;
  }
  console.log(dot([1,2,3], [1,2,3]))
  console.log(dot([2,4,6], [2,4,6]))
  console.log(dot([1,1,1], [0,1,-1]))