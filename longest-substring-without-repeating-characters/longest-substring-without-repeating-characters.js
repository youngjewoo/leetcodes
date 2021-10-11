/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Set();
    let max = 0;
    
    for(const char of s) {
        if(map.has(char)){
            const dead = [];
            for(const c of map) {
                dead.push(c);
                if(c === char) break;
            }
            dead.forEach(c => map.delete(c));
        }
        map.add(char);
        max = Math.max(max, map.size);
    }

    return max;
};