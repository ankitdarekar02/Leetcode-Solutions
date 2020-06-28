/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let numArr = Array(n+1).fill(0);
    for(i =1;i<=n;i++) {
        numArr[i] = i;
        for(j=1;j*j<=i;j++){
            let sq = j*j;
            numArr[i] = Math.min(numArr[i],1+numArr[i - sq])
        }
    }
    return numArr[n]
};