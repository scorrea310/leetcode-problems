// https://leetcode.com/problems/linked-list-cycle/description/

class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

// Time Compexity: O(n)
// Space Complelxity(n)
function hasCycle(head: ListNode | null): boolean {
    if(!head || !head.next) return false
    let set = new Set()
    let currentNode: ListNode | null = head

    while(currentNode) {
        if(set.has(currentNode)) {
            return true
        }
        set.add(currentNode)
        currentNode = currentNode.next
    }

    return false
};