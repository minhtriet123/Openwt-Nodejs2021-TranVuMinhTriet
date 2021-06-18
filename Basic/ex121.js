// Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

function is_lower_tria(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (j>i  && mat[i][j] != 0) return false;
        }
    }
    return true;

}
console.log(is_lower_tria([[1, 0, 0], [2, 0, 0], [0, 3, 3]]));
console.log(is_lower_tria([[1, 0, 1], [2, 0, 0], [0, 3, 3]]));