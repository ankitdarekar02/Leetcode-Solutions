/**
 * @param {number} n
 * @return {number}
 */
// Approach 1: Using Binary Search
var arrangeCoins = function(n) {
    let l = 1;
    let h = n;
    while (l <= h){
        let mid = Math.floor(l + (h-l)/2);
        let temp = mid*(mid+1)/2;
        if( temp == n) return mid;
        if(temp > n){
            h = mid -1
        } else {
            l = mid +1
        }
    }
    return h
};

// Approach 2: Mathematical Solution
var arrangeCoins = function(n) {
    return Math.floor(((1 + 8*n)**0.5 - 1)/2)
};