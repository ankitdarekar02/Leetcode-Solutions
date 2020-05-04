class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        dic = {}
        for r in ransomNote:
            dic[r] = ransomNote.count(r)
        for key in dic.keys():
            if magazine.count(key) < dic[key]:
                return False
        return True
        
        