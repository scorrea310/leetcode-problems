// https://leetcode.com/problems/find-mode-in-binary-search-tree/
// Time: O(n)
// Space: O(n)

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

function findMode(root: TreeNode | null): number[] {
  let counter: Record<string, number> = {};
  function dfs(node: TreeNode, counter) {
    if (!node) return;

    if (node.val in counter) {
      counter[node.val] += 1;
    } else {
      counter[node.val] = 1;
    }

    dfs(node.left, counter);
    dfs(node.right, counter);
  }
  dfs(root, counter);
  let maxFreq = Math.max(...Object.values(counter));

  let ans = [];

  for (const key in counter) {
    if (counter[key] === maxFreq) {
      ans.push(key);
    }
  }
  return ans;
}
