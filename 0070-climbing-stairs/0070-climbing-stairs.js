/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) {return n;}


    const dp = [0, 1, 2];

    for (let i = 3; i <= n; ++i) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[dp.length - 1];
};