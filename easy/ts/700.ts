// https://leetcode.com/problems/search-in-a-binary-search-tree/?envType=study-plan-v2&envId=leetcode-75
// Time: (log(n))
// Space: O(1)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let currentNode = root;
  while (currentNode) {
    if (currentNode.val === val) {
      return currentNode;
    } else if (val < currentNode.val) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return null;
}
