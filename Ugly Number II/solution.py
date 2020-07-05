class Solution:
    def nthUglyNumber(self, n: int) -> int:
        p2,p3,p5 = 0,0,0
        uglyList = [1]*n
        for i in range(1,n):
            minNumber = min(uglyList[p2]*2,uglyList[p3]*3,uglyList[p5]*5)
            uglyList[i] = minNumber
            if minNumber == uglyList[p2]*2 :
                p2 += 1
            if minNumber == uglyList[p3]*3 :
                p3 += 1
            if minNumber == uglyList[p5]*5 :
                p5 += 1
        return uglyList[n-1]