/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n;

    const dp = [0 ,1]

    for(let i = 2; i <= n; ++i) {
        dp[i] = dp[i-2] + dp[i-1];
    }

    return dp.pop();
};