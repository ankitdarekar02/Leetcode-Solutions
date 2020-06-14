/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length <= 1) return nums;
    if(nums.length == 2) {
        return [nums[0]]
    };
    let sortedNums = nums.sort((a,b)=>a-b)
    let dp = Array(nums.length).fill(1);
    let max = 0;
    let result = [];
    let prev = -1;
    for(i=1;i <= nums.length;i++) {
        for(j=i-1;j >= 0;j--) {
             if (nums[i] % nums[j] === 0) {
                if (dp[i] < dp[j]+1) {
                    dp[i] = dp[j]+1
                    if (dp[i] > max) {
                        max = dp[i]
                    }
                }
            }
        }
    }
    for(i=nums.length-1;i>=0;i--){
        if(dp[i] == max && (prev%nums[i] ==0 || prev == -1)){
            result.push(nums[i])
            max-=1;
            prev = nums[i];
        }
    }
    if(result.length == 0) {
        return [nums[0]]
    }
    return result;
};