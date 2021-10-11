/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s === null || s.length === 0) return 0;
    if(s[0] === '0') return 0;
    
    const dp = new Int32Array(s.length+1);
    
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i=2;i<=s.length;++i){
        const last = Number(s.slice(i-1,i)); // last 1 digit
        if(last >= 1 && last <= 9) {
            dp[i] += dp[i-1];
        }
        const semiLast = Number(s.slice(i-2,i)); // last 2 digit
        if(semiLast >= 10 &&  semiLast <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[s.length];
};