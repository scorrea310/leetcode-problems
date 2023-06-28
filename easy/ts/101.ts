// https://leetcode.com/problems/symmetric-tree/description/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root);
};

function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (t1.val == t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}