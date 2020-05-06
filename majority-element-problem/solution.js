var majorityElement = function(nums) {
    //  Using Boyer-Moore Voting Algorithm 
    // Time Complecity : O(n)

    let majIndex = 0, count = 0;
        nums.forEach((num, i) => {
             if(num == nums[majIndex]) {
                  count++;
              } else {
                  count--;
              }
              if(count == 0) {
                 majIndex = i;
                 count = 1;
               } 
        });
        
         return nums[majIndex];
       
    };