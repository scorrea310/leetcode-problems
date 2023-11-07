// https://leetcode.com/problems/transpose-matrix/
// Time: O(r * c)
// Space: O(1) don't count answer.
function transpose(matrix: number[][]): number[][] {
  let ans: number[][] = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let newRow: number[] = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col] as number);
    }
    ans.push(newRow);
  }
  return ans;
}
