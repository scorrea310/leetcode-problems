// https://leetcode.com/problems/repeated-substring-pattern/
//  Time Compelxity: O(n * sqrt(n))
//  Space Complexity: O(n)
function repeatedSubstringPattern(s: string): boolean {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s.length % (i + 1) === 0) {
      let compareString = addLetters(i, s);
      if (compareString) return true;
    }
  }
  return false;
}

function addLetters(range: number, s: string): boolean {
  let finalString: string[] = [];
  let rangeString = s.slice(0, range + 1);

  for (let i = 0; i < s.length / (range + 1); i++) {
    finalString.push(rangeString);
  }
  return s === finalString.join("");
}
