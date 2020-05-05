class Solution:
    def firstUniqChar(self, s: str) -> int:
        arr = [0 for i in range(26)]
        for i in range(len(s)):
            arr[ord(s[i])-97]+=1
            
        for j in range(len(s)):
            if(arr[ord(s[j])-97] == 1):
                return j
        return -1
            