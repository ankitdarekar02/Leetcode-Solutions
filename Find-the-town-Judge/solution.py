class Solution:
    def findJudge(self, N: int, trust: List[List[int]]) -> int:
        if N == 1: return 1
        # first cell is dummy, just for the convenience of indexing start from 1 to N
        trust_score = [ 0 for _ in range(N+1) ]
        
        for a, b in trust:
            trust_score[a] -=1
            trust_score[b] +=1
            
        
        for person in range(1, N+1):
            # town judge will be trusted by other N-1 people, and town judge trust nobody.
            if trust_score[person] == N-1:
                return person
        
        return -1