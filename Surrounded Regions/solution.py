class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if len(board) < 1:
            return board 
        row_len = len(board)
        col_len = len(board[0])
        
        for r in range(row_len):
            self.mark(r,0,board)
            self.mark(r,col_len-1,board)
        for c in range(col_len):
            self.mark(0,c,board)
            self.mark(row_len-1,c,board)
            
        for r in range(row_len):
            for c in range(col_len):
                if board[r][c] == 'O':
                    board[r][c] = 'X'
                if board[r][c] == 'I':
                    board[r][c] = 'O'                 
    def mark(self, row, col, board):
        if row < 0 or row >= len(board) or col < 0 or col >= len(board[0]) or board[row][col] != 'O':
            return
        board[row][col] = 'I'
        self.mark(row+1,col,board)
        self.mark(row-1,col,board)
        self.mark(row,col-1,board)
        self.mark(row,col+1,board)