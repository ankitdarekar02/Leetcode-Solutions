/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length == 0) return 0
    const n = citations.length;
    let low = 0;
    let high = n -1;
    while (low <= high){
        let mid = Math.floor((low+high)/2);
        if(citations[mid] == n - mid) {
            return citations[mid];
        }
        if(citations[mid] > n - mid) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return n -low;
};

        
            

 