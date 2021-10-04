/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const left = [];
    const right = [];
    let lMax = Number.MIN_SAFE_INTEGER;
    let rMax = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<height.length; ++i){
        lMax = Math.max(lMax, height[i]);
        left.push(lMax);
    }
    for(let i=height.length-1;i>=0; --i){
        rMax = Math.max(rMax, height[i]);
        right.unshift(rMax);
    }
    let waters = 0;
    for(let i=0;i<height.length;++i){
        waters += (Math.min(left[i], right[i]) - height[i]);
    }
    return waters;
};