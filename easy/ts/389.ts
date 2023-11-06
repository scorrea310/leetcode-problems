// https://leetcode.com/problems/find-the-difference/
// Time: O(n)
// Space: O(1)
function findTheDifference(s: string, t: string): string {
  let sMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = 1;
    } else {
      sMap[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (!sMap[letter] || sMap[letter] === 0) return letter;
    sMap[letter]--;
  }
  return "";
}
