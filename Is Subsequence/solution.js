/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length == 0) return true
    let idx_s = 0;
    for(let i =0;i < t.length;i++) {
        if(t[i] == s[idx_s]) {
            idx_s++;
        }
        if(idx_s == s.length) {
            return true
        }
    }
    return idx_s == s.length
};