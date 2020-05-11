/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// Approach 1:
var findJudge = function(N, trust) {
    const counts = new Array(N+1).fill(0);
    for(let [i,j] of trust) {
        counts[i] -= 1;
        counts[j] += 1;
    }
    for(let i=1;i<counts.length;i++) {
        if(counts[i] == (N-1)) return i;
    }
    return -1;
};

// Approach 2:
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    const truster = new Array(N).fill(0);
    const trustee = new Array(N).fill(0);
    for(let i =0; i<trust.length;i++){
        let [a, b] = trust[i];
        a--;
        b--;
        truster[a]++;
        trustee[b]++;
    }
    
    for(let i = 0; i < N; i++) {
        if (truster[i] == 0 && trustee[i] == N - 1) {
            return i + 1;
        }
    }
    
    return -1;
};
