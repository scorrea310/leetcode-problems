// https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n^2)
// Space: O(n^2)
function equalPairs(grid: number[][]): number {
  let columnsMap = {};

  let colX = 0;
  let colY = 0;
  while (colX < grid.length) {
    let columnArray = [];
    while (colY < grid.length) {
      columnArray.push(grid[colY][colX]);
      colY++;
    }

    let arrString = columnArray.join(",");
    if (!columnsMap[arrString]) {
      columnsMap[arrString] = 1;
    } else {
      columnsMap[arrString]++;
    }
    columnArray = [];
    colY = 0;
    colX++;
  }

  let rowX = 0;
  let rowY = 0;
  let totalPairs = 0;
  while (rowX < grid.length) {
    let rowArray = [];
    while (rowY < grid.length) {
      rowArray.push(grid[rowX][rowY]);
      rowY++;
    }
    let arrString = rowArray.join(",");
    if (columnsMap[arrString]) {
      totalPairs += columnsMap[arrString];
    }
    rowArray = [];
    rowY = 0;
    rowX++;
  }

  return totalPairs;
}
