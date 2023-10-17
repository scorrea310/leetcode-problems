// https://leetcode.com/problems/path-sum/
// Time and Space: O(n)

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return checkPathSum(root, 0, targetSum);
}

function checkPathSum(
  node: TreeNode | null,
  pathSum: number,
  targetSum: number
): boolean {
  if (!node) return false;

  pathSum += node.val;

  // If we are at a leaf node and the path sum matches the target
  if (!node.left && !node.right && pathSum === targetSum) {
    return true;
  }

  return (
    checkPathSum(node.left, pathSum, targetSum) ||
    checkPathSum(node.right, pathSum, targetSum)
  );
}
