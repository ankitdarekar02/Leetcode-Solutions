/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let rows = dungeon.length;
    let cols = dungeon[0].length;
    let dp = [...Array(rows)].map(e => Array(cols));
    for(i=rows-1;i>=0;i--){
        for(j=cols-1;j>=0;j--){
            if(i == rows -1 && j == cols -1){
                dp[i][j] = Math.min(0,dungeon[i][j])
            }
            else if(i == rows -1) {
                dp[i][j] = Math.min(0,dungeon[i][j] + dp[i][j+1])
            }
            else if(j == cols -1) {
                dp[i][j] = Math.min(0,dungeon[i][j] + dp[i+1][j])
            } 
            else {
                dp[i][j] = Math.min(0,dungeon[i][j] + Math.max(dp[i][j+1],dp[i+1][j]))
            }
        }
    }
    return Math.abs(dp[0][0]) +1;
};