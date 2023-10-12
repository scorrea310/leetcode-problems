// https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75
// Time Complexity: O(m + n)
// Space Complexity: O(m + n)

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let leaves1 = [];
  let leaves2 = [];

  getsLeafsOfTree(root1, leaves1);
  getsLeafsOfTree(root2, leaves2);
  return (
    leaves1.length == leaves2.length &&
    leaves1.every((v, i) => v === leaves2[i])
  );
}

function getsLeafsOfTree(node: TreeNode, array: number[]) {
  if (node !== null) {
    if (node.left === null && node.right === null) {
      array.push(node.val);
    }
    getsLeafsOfTree(node.left, array);
    getsLeafsOfTree(node.right, array);
  }
}
