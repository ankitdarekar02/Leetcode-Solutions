class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        result,count = x^y,0
        while result > 0:
            count += result & 1
            result >>= 1
        
        return count
        