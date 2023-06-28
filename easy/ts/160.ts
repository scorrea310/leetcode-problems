// https://leetcode.com/problems/intersection-of-two-linked-lists/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// Time Complexity: O(M + N)
// Space Complexity: O(M)
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let set = new Set();
    let currentNodeHeadA = headA;

    while(currentNodeHeadA) {
        set.add(currentNodeHeadA)
        currentNodeHeadA = currentNodeHeadA.next
    }
    let currentNodeHeadB = headB
    while(currentNodeHeadB) {
        if(set.has(currentNodeHeadB)) {
            return currentNodeHeadB
        }
        currentNodeHeadB = currentNodeHeadB.next
    }

    return null
};