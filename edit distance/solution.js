/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let [M,N] = [word1.length, word2.length];
    let matrix = Array(M +1).fill().map(() => Array(N+1).fill(0));
    for(let i=0;i<= M;++i) matrix[i][0] = i;
    for(let j=1;j<= N;++j) matrix[0][j] = j;
    for(let i=1;i<= M;i++) {
        for(let j=1;j <= N;j++) {
                if(word1[i-1] == word2[j-1]) {
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = 1 + Math.min(matrix[i-1][j-1],matrix[i][j-1],matrix[i-1][j]);
                }
        }
    }
    return matrix[M][N];
};