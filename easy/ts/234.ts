// https://leetcode.com/problems/palindrome-linked-list/description/
// Time Complexity: O(n)
// Space Complexity: O(n)
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
  }

function isPalindrome(head: ListNode | null): boolean {
    if(head === null) return false;
    if(head.next === null) return true

    let array: number[] = []
    let currentNode = head
    while(currentNode !== null) {
        array.push(currentNode.val)
        currentNode = currentNode.next
    }

    let left = 0
    let right = array.length - 1

    while(left <= right) {
        if(array[left] !== array[right]) {
            return false
        }
        left = left + 1
        right = right - 1
    }

    return true
};