// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
// Time: O(n)
// Space: O(1)
function maxScore(s: string): number {
  let leftTotal = 0;
  let onesInRight = 0;

  for (let i = 1; i < s.length; i++) {
    let char = s[i];
    if (char === "1") {
      onesInRight++;
    }
  }

  let count = onesInRight;
  let i = 0;
  while (i < s.length - 1) {
    if (i === 0) {
      if (s[i] === "0") {
        count++;
      }
      leftTotal++;
      i++;
      continue;
    }

    if (s[i] === "0") {
      leftTotal++;
    }

    if (s[i - 1] === "1") {
      onesInRight--;
    }
    if (leftTotal + onesInRight > count) {
      count = leftTotal + onesInRight;
    }

    i++;
  }

  return count;
}
