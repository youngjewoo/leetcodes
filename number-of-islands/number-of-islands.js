/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (i, j) => {
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
        grid[i][j] = '0';
        
        dfs(i-1, j); // up
        dfs(i, j-1); // left
        dfs(i+1, j); // down
        dfs(i, j+1); // right
    }
    let cnt = 0;
    for(let i=0;i<grid.length;++i){
        for(let j=0;j<grid[0].length;++j){
            if(grid[i][j] === '1') {
                ++cnt;
                dfs(i, j);
            }
        }
    }
    return cnt;
};