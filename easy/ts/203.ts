// https://leetcode.com/problems/remove-linked-list-elements/description/
// Time and Space: O(n)

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return head;
  let prevNewHead = new ListNode(1);

  let currNode = head;
  let newCurrNode = prevNewHead;

  while (currNode) {
    if (currNode.val !== val) {
      newCurrNode.next = new ListNode(currNode.val);
      newCurrNode = newCurrNode.next;
    }
    currNode = currNode.next;
  }

  return prevNewHead.next;
}
