/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let prev;

    for(let i = 0; i < nums.length; ++i) {
        if (prev !== nums[i]) {
            nums[k] = nums[i];
            ++k;
        }

        prev = nums[i];
    }
    
    return k;
};