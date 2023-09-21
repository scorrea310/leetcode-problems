// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// Time: O(n)
// Space: O(n)
function removeDuplicates(s: string): string {
  if (s.length == 1 || (s.length === 2 && s[0] !== s[1])) return s;
  if (s.length === 2) return "";

  let right = 1;
  let answerArray = [s[0]];
  while (right < s.length) {
    let lastElInStack = answerArray[answerArray.length - 1];
    if (lastElInStack === s[right]) {
      answerArray.pop();
    } else {
      answerArray.push(s[right]);
    }
    right++;
  }
  return answerArray.join("");
}
