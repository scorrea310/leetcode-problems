//  https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(1)
function maxVowels(s: string, k: number): number {
  let startMax = 0;
  let start = 0;
  let end = k - 1;
  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  for (let i = 0; i <= end; i++) {
    if (vowels[s[i]]) {
      startMax++;
    }
  }
  let currMax = startMax;
  while (end < s.length) {
    start++;
    end++;
    if (!vowels[s[start - 1]] && vowels[s[end]]) {
      currMax++;
      if (currMax > startMax) {
        startMax = currMax;
      }
    }
    if (!vowels[s[end]] && vowels[s[start - 1]]) {
      currMax--;
    }
  }
  return startMax;
}
