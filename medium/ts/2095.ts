// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(1)

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head.next === null) return null;
  if (head.next.next === null) {
    head.next = null;
    return head;
  }
  let total = 0;

  let currentNode = head;
  while (currentNode) {
    currentNode = currentNode.next;
    total++;
  }

  let middleNode = Math.floor(total / 2);
  let nodeBefore;
  let nodeAfter;

  currentNode = head;
  total = 0;
  while (total <= middleNode + 1) {
    if (total === middleNode - 1) {
      nodeBefore = currentNode;
    }
    if (total === middleNode + 1) {
      nodeAfter = currentNode;
    }
    currentNode = currentNode.next;
    total++;
  }

  nodeBefore.next = nodeAfter;
  return head;
}
