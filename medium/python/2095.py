# https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next == None:
            return None
        if head.next.next == None:
            head.next = None
            return head

        total = 0
        currentNode = head
        while currentNode:
            currentNode = currentNode.next
            total += 1

        middleNode = floor(total / 2)
        nodeBefore = None
        nodeAfter = None

        total = 0
        currentNode = head

        while total <= middleNode + 1:
            if total == middleNode - 1:
                nodeBefore = currentNode
            if total == middleNode + 1:
                nodeAfter = currentNode
            currentNode = currentNode.next
            total += 1
        nodeBefore.next = nodeAfter
        return head
