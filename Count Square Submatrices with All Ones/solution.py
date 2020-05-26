# Approach 1
class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        m = len(matrix[0])
        ansmatrix = [[0]*(m+1) for _ in range(0,n+1)]
        count = 0
        for row in range(1,n+1):
            for col in range(1,m+1):
                if matrix[row -1][col-1]==1:
                    ansmatrix[row][col] = 1 + min(ansmatrix[row][col-1], ansmatrix[row-1][col], ansmatrix[row -1][col-1])
                    count += ansmatrix[row][col]
                    print(count)
                    
        return count
                        

# Approach 2
class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        if matrix is None or len(matrix) == 0:
                return 0
        rows = len(matrix)
        cols = len(matrix[0])
        result = 0 
        for r in range(rows):
            for c in range(cols):
                if matrix[r][c] ==1:
                    if r == 0 or c == 0:
                            result +=1
                    else:
                        cell_value = matrix[r][c] + min(matrix[r-1][c], matrix[r][c-1], matrix[r-1][c-1])
                        result += cell_value
                        matrix[r][c] = cell_value
        return result
                        