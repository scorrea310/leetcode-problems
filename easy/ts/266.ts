// https://leetcode.com/problems/palindrome-permutation/
// Time: O(n)
// Space: O(1)
function canPermutePalindrome(s: string): boolean {
  let charToOccur = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in charToOccur) {
      charToOccur[char]++;
    } else {
      charToOccur[char] = 1;
    }
  }

  let occur: number[] = Object.values(charToOccur);

  let oddCount = 0;
  for (let i = 0; i < occur.length; i++) {
    let num: number = occur[i];
    if (num % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) {
        return false;
      }
    }
  }

  return true;
}
