/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(itvs) {
    itvs.sort((a,b) => a[0]-b[0]);
    const ans = [itvs[0]];
    for(let i=1;i<itvs.length;++i){
        const lastRange = ans[ans.length-1];
        if(lastRange[1] < itvs[i][0]) {
            ans.push(itvs[i]);
        } else if(lastRange[1] < itvs[i][1]) {
            lastRange[1] = itvs[i][1];    
        }
    }
    return ans;
};
