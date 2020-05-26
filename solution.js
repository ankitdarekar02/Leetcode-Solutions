/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Time Complexity O(mn) Space Complexity: O(1)
var countSquares = function(matrix) {
    if(!matrix || matrix == null) return 0
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = 0;
    for(let r = 0;r < rows;r++){
        for(let c=0;c< cols;c++){
            if (matrix[r][c] == 1){
                if(r == 0 || c == 0) {
                    result += 1
                } else {
                    let cell_value = matrix[r][c] + Math.min(matrix[r][c-1],matrix[r-1][c],matrix[r-1][c-1]);
                    result += cell_value;
                    matrix[r][c] = cell_value;
                }
            } 
        }
    }
    return result
};

