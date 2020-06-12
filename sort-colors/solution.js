let left = 0 , right = nums.length -1 , current = 0;
while(current <= right){
    if(nums[current] === 0){
        let temp = nums[left];
        nums[left++] = nums[current];
        nums[current++] = temp;
    }else if(nums[current] === 1){
        current++;
    }else{
        let temp = nums[right];
        nums[right--] = nums[current];
        nums[current] = temp;
    }
}

return nums;