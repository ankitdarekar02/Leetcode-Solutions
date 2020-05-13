/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    if(high == 0) {
        return nums[0];
    }
    else if(nums[low] != nums[low+1]) {
        return nums[low];
    } else if(nums[high] != nums[high -1]) {
        return nums[high]
    }
    
    while(low <= high) {
      let mid = Math.floor(low + (high - low)/2);  
      if(nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]){
          return nums[mid]
      }
        
      if((mid%2 == 0 && nums[mid] == nums[mid +1]) || (mid%2 == 1 && nums[mid] == nums[mid -1])) {
         low = mid +1;
      } else {
          high = mid -1;
      }
    } 
    
     
};