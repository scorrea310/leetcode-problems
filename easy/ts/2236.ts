// https://leetcode.com/problems/root-equals-sum-of-children/description/
// Time: O(1)
// Space: O(1)
function checkTree(root: TreeNode | null): boolean {
  return root.val === root.right.val + root.left.val;
}
