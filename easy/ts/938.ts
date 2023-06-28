// https://leetcode.com/problems/range-sum-of-bst/description/
// Time Complexity: O(log(n)) average and O(n) worst
// Space Complexity: O(log(n)) average and O(n) worst
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if(root === null) return 0;
    let sum: number = 0;
    if(root.val >= low && root.val <= high) {
        sum += root.val
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }
    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum
};