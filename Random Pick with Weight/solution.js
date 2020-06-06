/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.cumulativeSum = [];
    let sum = 0;
    this.total = 0
    for(let word of w){
        sum += word;
        this.cumulativeSum.push(sum)
    }
    this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let random_num = Math.floor(Math.random() * this.total);
    let left = 0;
    let right = this.cumulativeSum.length-1;
    while(left < right){
        let mid = Math.floor((left + right) / 2)
        if(this.cumulativeSum[mid] > random_num){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */