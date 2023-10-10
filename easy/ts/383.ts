// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
// Time: O(n)
// Space: O(n)
function canConstruct(ransomNote: string, magazine: string): boolean {
  let magCharMap = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magCharMap[magazine[i]]) {
      magCharMap[magazine[i]]++;
    } else {
      magCharMap[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magCharMap[ransomNote[i]]) {
      magCharMap[ransomNote[i]]--;
    } else {
      return false;
    }
  }

  return true;
}
