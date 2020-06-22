class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        rows = len(dungeon)
        cols = len(dungeon[0])
        dp = [[0]*cols for j in range(rows)]
        dp[rows-1][cols-1] = 1 if dungeon[rows-1][cols-1] > 0 else (1 - dungeon[rows - 1][cols -1])
        for i in range(rows -2, -1, -1):
            dp[i][cols-1] = max(1, dp[i+1][cols-1] - dungeon[i][cols-1])
        for j in range(cols -2, -1, -1):
            dp[rows -1][j] = max(1, dp[rows-1][j+1] - dungeon[rows-1][j])
            
        for i in range(rows -2, -1, -1):
            for j in range(cols -2, -1, -1):
                dp[i][j] = max(1,min(dp[i+1][j],dp[i][j+1]) - dungeon[i][j])
                
        return dp[0][0]