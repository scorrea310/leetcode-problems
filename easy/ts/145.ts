// https://leetcode.com/problems/binary-tree-postorder-traversal/
// Time and Space: O(n)
function postorderTraversal(root: TreeNode | null): number[] {
  return !root
    ? []
    : [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val,
      ];
}
