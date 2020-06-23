class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return nums[0]
        nums.sort()
        if nums[len(nums) -1] != nums[len(nums) -2]:
            return nums[len(nums) -1]
        if nums[0] != nums[1]:
            return nums[0]
        i = 1
        while i < len(nums):
            if nums[i] != nums[i-1]:
                return nums[i-1]
            i+=3
        
        