// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
// Time: O(n)
// Sapce: O(1)
function isIsomorphic(s: string, t: string): boolean {
  let mapSToT = {};
  let mapTToS = {};

  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (!mapSToT[s[sIndex]] && !mapTToS[t[tIndex]]) {
      mapSToT[s[sIndex]] = t[tIndex];
      mapTToS[t[tIndex]] = s[sIndex];
      sIndex++;
      tIndex++;
    } else if (
      mapSToT[s[sIndex]] === t[tIndex] &&
      mapTToS[t[tIndex]] === s[sIndex]
    ) {
      sIndex++;
      tIndex++;
    } else {
      return false;
    }
  }
  return true;
}
