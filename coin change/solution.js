/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = Array(coins.length + 1).fill().map(() => Array(amount + 1).fill(0));
    dp[0][0] = 1;
    
    for(i=0;i<= coins.length;i++) {
        dp[i][0] = 1
    }
    
    for(i=1;i <= coins.length;i++) {
        for(j=1;j <= amount;j++) {
            if(coins[i-1] > j) {                
                dp[i][j] = dp[i-1][j]
            } 
            else {
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]
            }
        }
    }
    return dp[coins.length][amount];
};

// Optimized Solution
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {    
    let dp = Array(amount+1).fill(0);
    dp[0] = 1;
    for (i = 1; i <= coins.length;i++){
        for(j=1; j<= amount;j++) {
            if(coins[i-1] <= j) {
                dp[j] += dp[j - coins[i-1]];
            }
        }
    }
    return dp[amount]
};