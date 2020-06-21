class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        def solve(ans, n, k):
            if n == 1:
                self.ans += str(digitsArr[0])
                return
            
            index = k//facts[n-1]
            if(k%facts[n-1] == 0):
                index-=1
            
            self.ans += str(digitsArr[index])
            del digitsArr[index]
            k -= facts[n-1]*index
            solve(self.ans,n-1,k)
        
        f = 1
        facts = [1]*9
        digitsArr = [c+1 for c in range(n)]
        for c in range(1,9):
            f *= c
            facts[c]  = f
        print(facts)
        self.ans = ""
        solve(self.ans,n,k)
        return self.ans