// https://leetcode.com/problems/increasing-order-search-tree/
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root.right && !root.left) {
    return root;
  }
  let array: TreeNode[] = [];
  addNodes(root, array);

  let newHead = new TreeNode(array[0].val);
  let currentNode = newHead;

  for (let i = 1; i < array.length; i++) {
    currentNode.right = new TreeNode(array[i].val);
    currentNode = currentNode.right;
  }
  return newHead;
}

function addNodes(node: TreeNode | null, array: TreeNode[]) {
  if (node === null) return;
  addNodes(node.left, array);
  array.push(node);
  addNodes(node.right, array);
}
