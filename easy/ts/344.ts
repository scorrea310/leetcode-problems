// https://leetcode.com/problems/reverse-string/description/

// Time Complexity: O(n)
// Space Complexity: O(1)
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let originalLeft = s[left];
    s[left] = s[right];
    s[right] = originalLeft;
    left++;
    right--;
  }
}
