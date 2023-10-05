class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
// Time Complexity: O(n)
// Space: O(1)
function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let lengthOfLinkedList = 1;
  let currentNode = head;

  while (currentNode.next) {
    lengthOfLinkedList++;
    currentNode = currentNode.next;
  }

  let firstNode;
  let currNodeAgain = head;
  let lastNodeValue;

  if (lengthOfLinkedList === 1) return head;
  if (lengthOfLinkedList === 2) {
    let lastVal = head.next.val;
    let headVal = head.val;
    head.val = lastVal;
    head.next.val = headVal;
    return head;
  }

  if (0 + (k - 1) < lengthOfLinkedList - k) {
    for (let i = 0; i <= lengthOfLinkedList - k; i++) {
      if (k - 1 === i) {
        firstNode = currNodeAgain;
      }

      if (lengthOfLinkedList - k === i) {
        lastNodeValue = currNodeAgain.val;
        currNodeAgain.val = firstNode.val;
      }
      currNodeAgain = currNodeAgain.next;
    }

    firstNode.val = lastNodeValue;
    return head;
  } else if (0 + (k - 1) > lengthOfLinkedList - k) {
    for (let i = 0; i <= k - 1; i++) {
      if (lengthOfLinkedList - k === i) {
        firstNode = currNodeAgain;
      }

      if (k - 1 === i) {
        lastNodeValue = currNodeAgain.val;
        currNodeAgain.val = firstNode.val;
      }
      currNodeAgain = currNodeAgain.next;
    }

    firstNode.val = lastNodeValue;
    return head;
  } else {
    return head;
  }
}
