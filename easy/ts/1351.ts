// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
// Time complexity: O(n^2)
// Space Complexity: O(1)
var countNegatives = function(grid: number[][]) {
    let total = 0

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] < 0) {
                total++
            }
        }
    }

    return total
};