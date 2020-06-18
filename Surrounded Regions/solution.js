/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const dfs = function(board, i ,j) {
    if(board[i][j] == "O") {
        board[i][j] = "1";
        if(i+1 < board.length) dfs(board, i+1, j);
        if(i>1) dfs(board, i-1, j);
        if(j+1 < board[i].length) dfs(board, i, j+1);
        if(j > 1) dfs(board, i, j-1);
    }    
 }
 
 var solve = function(board) {
     if(board.length == 0) return;
     const rows = board.length;
     const cols = board[0].length;
     
     for(i=0;i<rows;i++) {
         dfs(board, i, 0);
         dfs(board, i, cols-1);
     }
     
     for(j=1;j<cols -1;j++){
         dfs(board, 0, j);
         dfs(board, rows-1, j);
     }
     
     for(i=0;i< rows;i++) {
         for(j=0;j< cols;j++) {
             if(board[i][j] == '1') {
                 board[i][j] = 'O';
             } else if(board[i][j] == 'O'){
                 board[i][j] = 'X';
             }
         }
     }
 };
 
 