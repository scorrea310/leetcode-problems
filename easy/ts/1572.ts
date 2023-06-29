// https://leetcode.com/problems/matrix-diagonal-sum/description/

// Time Complexity: O(n)
// Space Complexity: O(1)

function diagonalSum(mat: number[][]): number {
  if (mat.length === 1) return mat[0][0];
  let sum = 0;

  let xIndexSecondary = mat.length - 1;
  let i = 0;

  while (i < mat.length) {
    sum += mat[i][i];
    sum += mat[xIndexSecondary][i];
    i++;
    xIndexSecondary--;
  }

  if (mat.length % 2 === 0) return sum;
  return sum - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
}
