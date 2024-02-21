// https://leetcode.com/problems/backspace-string-compare/
// Spacec and Time: O(n)
function backspaceCompare(s: string, t: string): boolean {
  let sStack: string[] = [];
  let tStack: string[] = [];

  for (const letter of s) {
    if (letter !== "#") {
      sStack.push(letter);
    } else {
      sStack.pop();
    }
  }

  for (const letter of t) {
    if (letter !== "#") {
      tStack.push(letter);
    } else {
      tStack.pop();
    }
  }
  return sStack.join("") === tStack.join("");
}
