/**
 * @param {number} n
 * @return {number}
 */
// Catalan Number Approach
let cache = new Map()
var numTrees = function(n) {
    if(n < 2) return 1
    if(cache.has(n)) return cache.get(n)
    let count = 0
    for(let i=1;i<=n;i++) {
        count += numTrees(i-1)*numTrees(n-i) 
    }
    cache.set(n,count)
    return count
};