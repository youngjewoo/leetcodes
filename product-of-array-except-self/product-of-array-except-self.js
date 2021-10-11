/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zCnt = 0;
    const sum = nums.reduce((acc,val) => {
        if(val !== 0) {
            return acc * val;
        } else {
            ++zCnt;
            return acc;
        }
    });
    let ans = [];
    for(let i=0;i<nums.length;++i){
        if(zCnt === 1 && nums[i] === 0){
            ans.push(sum);
        } else if(zCnt > 0){
            ans.push(0)
        } else {
            ans.push(sum / nums[i]);
        }
    }
    return ans;
};