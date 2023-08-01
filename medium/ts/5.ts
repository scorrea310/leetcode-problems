// https://leetcode.com/problems/longest-palindromic-substring/description/
// Time: O(n^3)
// Space: O(n)
function isPal(palArray: string[]): boolean {
  let start = 0;
  let end = palArray.length - 1;

  while (start < end) {
    if (palArray[start] !== palArray[end]) return false;
    start++;
    end--;
  }
  return true;
}

function longestPalindrome(s: string): string {
  let palArray = [];
  let palString = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      palArray.push(s[j]);
      if (isPal(palArray) && palArray.length > palString.length) {
        palString = palArray.join("");
      }
    }
    palArray = [];
  }
  return palString;
}
