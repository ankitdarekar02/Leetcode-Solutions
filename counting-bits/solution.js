/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let result = [0];
    for(let i=1; i< num +1;i++) {
        result.push(result[i>>1] + (i & 1))
    }
    return result;
};