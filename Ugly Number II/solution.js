/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let f1 = 0, f2 = 0 , f3 = 0,uglyList=[1]
    for(let i=1;i<n;i++){
        let min = Math.min(uglyList[f1]*2,uglyList[f2]*3,uglyList[f3]*5)
        if(min == uglyList[f1]*2) f1++
        if(min == uglyList[f2]*3) f2++
        if(min == uglyList[f3]*5) f3++
        uglyList[i] = min
    }
    return uglyList[n-1]
};