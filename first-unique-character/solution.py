# Solution 1:
class Solution:
    def firstUniqChar(self, s: str) -> int:
        d = {c: s.count(c) for c in set(s)}
        return ([i for i, c in enumerate(s) if d[c] == 1] + [-1])[0]


# Solution 2:
class Solution:
    def firstUniqChar(self, s: str) -> int:
        arr = [0 for i in range(26)]
        for i in range(len(s)):
            arr[ord(s[i])-97]+=1
            
        for j in range(len(s)):
            if(arr[ord(s[j])-97] == 1):
                return j
        return -1
            
