// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
// Time: O(n)
// Space: O(n)
function areAlmostEqual(s1: string, s2: string): boolean {
  let wrongCharsIndexes = [];
  for (let i = 0; i < s2.length; i++) {
    let s1Let = s1[i];
    let s2Let = s2[i];
    if (s1Let !== s2Let) {
      wrongCharsIndexes.push(i);
      if (wrongCharsIndexes.length > 2) return false;
    }
  }
  if (wrongCharsIndexes.length === 0) return true;
  if (wrongCharsIndexes.length === 1) return false;
  if (s1[wrongCharsIndexes[0]] !== s2[wrongCharsIndexes[1]]) return false;
  if (s2[wrongCharsIndexes[0]] !== s1[wrongCharsIndexes[1]]) return false;
  return true;
}
