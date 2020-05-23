/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let charCount = {};
    for (let c of s) {
        if(!charCount[c] || charCount[c] == null) {
            charCount[c] = 1;
        } else {
            charCount[c]+=1
        }
    }
    let sortedArr = Object.keys(charCount).sort((a,b) => charCount[b]-charCount[a])
    return sortedArr.reduce((acc, cur) => acc + cur.repeat(charCount[cur]) ,'');
};