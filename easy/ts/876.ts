// https://leetcode.com/problems/middle-of-the-linked-list/description/
// Time Complexity: O(n)
// Space Complexity: O(1)
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function middleNode(head: ListNode | null): ListNode | null {
    if(!head) return null
    if(!head.next) return head
    let total = 1
    let currentNode: ListNode | null = head

    while(currentNode) {
        total++
        currentNode = currentNode.next
    }

    let middleNodePosition = Math.ceil(total / 2)
    let middleNode: ListNode | null = head
    while(middleNodePosition > 1) {
        middleNode = middleNode.next
        middleNodePosition--
    }

    return middleNode
};