/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<prices.length;++i){
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min)
    }
    return maxProfit;
};