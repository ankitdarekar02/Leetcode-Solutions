class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        numd={1:[]}
        for num in sorted(nums): numd[num]=max([[]]+[numd[k] for k in numd.keys() if not num%k],key=len)+[num]
        return max(numd.values(),key=len)
        