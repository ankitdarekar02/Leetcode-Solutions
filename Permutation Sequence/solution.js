/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const solve = function(ans, n, k){ 
        this.ans = ans;
        if (n == 1) {
            this.ans += digitsArr[0]
            return
        }
        let index = Math.floor(k/facts[n-1])
        if(k%facts[n-1] == 0) {
            index-=1;
        }
        this.ans += digitsArr[index];
        digitsArr.splice(index, 1);
        k -= facts[n-1]*index;
        solve(this.ans,n-1,k);
    }
    let f = 1;
    let facts = new Array(n).fill(1);
    let digitsArr = [];
    for(let i=0;i < n;i++) {
       digitsArr[i] = i+1;
    }
    for(let i=1;i < n;i++) {
       f *= i;
       facts[i] = f;
    }
    let ans = ""
    solve(ans,n,k);
    return this.ans;
};