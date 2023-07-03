// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/
// Time Complexity: O(n)
// Space Complexity: O(n)
function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (!cloned.right && !cloned.left) return cloned;
  let stack = [cloned];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val === target.val) return node;

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
}
