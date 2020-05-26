class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1_length = len(s1)
        if s1_length > len(s2): 
            return False
        
        s1_counter = Counter(s1)
        window_counter = Counter()
        
        for i,c in enumerate(s2):
            window_counter[c] +=1
            if i >= s1_length:
                element_from_left = s2[i - s1_length]
                if window_counter[element_from_left] == 1:
                    del window_counter[element_from_left]
                else:
                    window_counter[element_from_left]-=1
            if window_counter == s1_counter:
                return True
            
        return False