/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let row = new Array(3).fill(1)

    for (let i = 0; i < 4-1; i++) {
        for (let j = 1; j < 3; j++) {
            row[j] = row[j-1] + row[j]
        }
    }
    return row[n-1]
};