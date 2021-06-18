//  Write a JavaScript program to check whether a given matrix is an identity matrix. 
//  Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix
// , of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
function identity_Matrix(mat) {
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat.length; j++) {
            if (mat[i][j] !== 1 && i === j || mat[i][j] === 1 && i !== j) {
                return false;
            }
        }
    }
    return true;
}

console.log(identity_Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(identity_Matrix([[1, 0, 1], [0, 1, 0], [0, 0, 1]]))
console.log(identity_Matrix([[0, 2, 0], [0, 2, 0], [0, 2, 0]]))