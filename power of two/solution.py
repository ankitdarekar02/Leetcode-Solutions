# Approach 1
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n==0:
            return False
        return n & (-n) == n

# Approach 2
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n==0:
            return False
        while n % 2 == 0:
            n /= 2
        return n == 1
