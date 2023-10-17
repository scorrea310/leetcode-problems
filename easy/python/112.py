# https://leetcode.com/problems/path-sum/description/
# Time and Space: O(n)
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        stack = [(root, root.val)]

        while stack:
            node, current_sum = stack.pop()

            if not node.left and not node.right and current_sum == targetSum:
                return True

            if node.right:
                stack.append((node.right, current_sum + node.right.val))

            if node.left:
                stack.append((node.left, current_sum + node.left.val))

        return False
