/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let duplicateCount = 0;
    let prev;

    for(let i = 0; i < nums.length; ++i) {
        
        if (prev !== nums[i]) {
            nums[k] = nums[i];
            ++k;
            duplicateCount = 0;
        } else if (prev === nums[i] && duplicateCount < 1) {
            nums[k] = nums[i];
            ++duplicateCount;
            ++k;
        } else {
            ++duplicateCount;
        }

        prev = nums[i];
    }

    return k;
};