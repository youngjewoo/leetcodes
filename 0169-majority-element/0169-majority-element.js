/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);

    let elemCount = 1;
    let prev = nums[0];
    

    for(let i = 1; i < nums.length; ++i) {
        if (prev === nums[i]) {
            ++elemCount;

            if(elemCount >= (nums.length / 2)) break;
        } else {
            elemCount = 1;
        }

        prev = nums[i];
    }

    return prev;
};