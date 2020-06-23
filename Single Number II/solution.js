/**
 * @param {number[]} nums
 * @return {number}
 */
//Approach 1 : By using Bit Manipulation
var singleNumber = function(nums) {
    let ans = 0;
    for(let i=0;i < 32;i++) {
        let sum = 0;
        for(let j=0;j<nums.length;j++){
            if(((nums[j] >> i) & 1) == 1) {
                sum++;
            } 
        }
        sum %= 3;
        if(sum != 0){
            ans |= sum << i;
        }
    }
    return ans;

    //Approach 2 : By using Sorting
    if(nums.length < 3) return nums[0]
    nums.sort((a,b) => a - b);
    if(nums[nums.length -1] != nums[nums.length -2]) return nums[nums.length -1]
    if(nums[0] != nums[1]) return nums[0]
    let i = 1;
    while(i < nums.length){
        if(nums[i] != nums[i-1]) return nums[i-1]
           i+=3
    }
};