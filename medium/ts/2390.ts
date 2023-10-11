// https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(n)
function removeStars(s: string): string {
  let charStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      charStack.pop();
    } else {
      charStack.push(s[i]);
    }
  }
  return charStack.join("");
}
