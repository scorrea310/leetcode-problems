// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
// Time: O(n)
// Space: O(H)

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

function sumRootToLeaf(root: TreeNode | null): number {
  return addBinaryNum(root, []);
}

function addBinaryNum(node: TreeNode | null, path: number[]): number {
  if (!node) return 0;

  path.push(node.val);

  // If it's a leaf node
  if (!node.left && !node.right) {
    let num = parseInt(path.join(""), 2);
    path.pop();
    return num;
  }

  // Sum the values from the left and right subtrees
  let total = addBinaryNum(node.left, path) + addBinaryNum(node.right, path);

  path.pop();

  return total;
}
