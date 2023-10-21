// https://leetcode.com/problems/swap-nodes-in-pairs/
// Time: O(n)
// Time: O(n)
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let array = [head];

  let currentNode: ListNode = head;

  while (currentNode) {
    currentNode = currentNode.next;
    if (currentNode) {
      array.push(currentNode);
    }
  }
  let i = array.length % 2 === 0 ? array.length - 2 : array.length - 3;
  let j = array.length % 2 === 0 ? array.length - 1 : array.length - 2;
  while (i >= 0) {
    let next = array[j + 1] ? array[j + 1] : array[j].next;
    array[j].next = array[i];
    array[i].next = next;
    let b = array[j];

    array[j] = array[i];
    array[i] = b;
    j -= 2;
    i -= 2;
  }
  return array[0];
}
