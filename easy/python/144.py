# https://leetcode.com/problems/binary-tree-preorder-traversal/
# Time: O(n)
# Space: O(n)


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        nodeVals = []
        stack = [root]
        while len(stack):
            node = stack.pop()
            if node:
                nodeVals.append(node.val)
                stack.append(node.right)
                stack.append(node.left)
        return nodeVals
