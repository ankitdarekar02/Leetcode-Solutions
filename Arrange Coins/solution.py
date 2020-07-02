#  Approach 1: Using Binary Search
class Solution:
    def arrangeCoins(self, n: int) -> int:
        l = 1
        h = n
        while l <= h:
            mid = l + (h - l)//2
            temp = int(mid*(mid +1)/2)
            if temp == n:
                return mid
            if temp < n:
                l = mid +1
            else:
                h = mid -1
        return h

#  Approach 2: Mathematical Solution
class Solution:
    def arrangeCoins(self, n: int) -> int:
        return int((int(1 + 8*n)**0.5 - 1)//2)