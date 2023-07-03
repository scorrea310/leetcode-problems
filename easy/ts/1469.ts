// https://leetcode.com/problems/find-all-the-lonely-nodes/description/
// Time and Space: O(n)
function getLonelyNodes(root: TreeNode | null): number[] {
  let stack = [root];
  let lonleyNodes = [];
  while (stack.length > 0) {
    let node = stack.pop();
    if (!node.left && node.right) {
      lonleyNodes.push(node.right.val);
    }
    if (node.left && !node.right) {
      lonleyNodes.push(node.left.val);
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return lonleyNodes;
}
