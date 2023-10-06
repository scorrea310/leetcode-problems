// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/
function canBeEqual(s1: string, s2: string): boolean {
  let s1Chars = s1.split("");
  let s2Chars = s2.split("");
  let setA = new Set();
  setA.add(s1Chars.join(""));

  for (let i = 0; i < 2; i++) {
    let firstChar = s1Chars[i];
    let secondChar = s1Chars[i + 2];
    s1Chars[i] = secondChar;
    s1Chars[i + 2] = firstChar;
    setA.add(s1Chars.join(""));
  }

  s1Chars[0] = s1[0];
  s1Chars[2] = s1[2];
  setA.add(s1Chars.join(""));

  let setB = new Set();
  setB.add(s2Chars.join(""));

  for (let i = 0; i < 2; i++) {
    let firstChar = s2Chars[i];
    let secondChar = s2Chars[i + 2];
    s2Chars[i] = secondChar;
    s2Chars[i + 2] = firstChar;
    setB.add(s2Chars.join(""));
  }

  s2Chars[0] = s2[0];
  s2Chars[2] = s2[2];
  setB.add(s2Chars.join(""));

  for (let item of setA) {
    if (setB.has(item)) {
      return true;
    }
  }
  return false;
}
