/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let loopIdx = 0;

    while (loopIdx < nums.length) {
        if (nums[loopIdx] === val) {
            nums.splice(loopIdx, 1);
        } else {
            ++loopIdx;
        }
    };

    return nums.length;
};