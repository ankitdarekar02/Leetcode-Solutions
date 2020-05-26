class Solution:
    def maxUncrossedLines(self, A: List[int], B: List[int]) -> int:
        len_A, len_B = len(A), len(B)
        dp_table = [ [ 0 for _ in range(len_B+1) ] for _ in range(len_A+1) ]
        
        for y in range(len_A):
            for x in range(len_B):
                
                if A[y] == B[x]:
                    # current number is matched, add one more uncrossed line
                    dp_table[y+1][x+1] = dp_table[y][x] + 1
                    
                else:
                    # cuurent number is not matched, backtracking to find maximal uncrossed line
                    dp_table[y+1][x+1] = max( dp_table[y+1][x], dp_table[y][x+1] )

                    
        return dp_table[len_A][len_B]