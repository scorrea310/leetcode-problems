// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
// Time Complexity: O(n)
// Space: O(n)
function reverseVowels(s: string): string {
  let stringArr: string[] = s.split("");
  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  let vowelsArr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]]) {
      vowelsArr.push(s[i]);
    }
  }

  for (let i = 0; i < stringArr.length; i++) {
    if (vowels[stringArr[i]]) {
      stringArr[i] = vowelsArr.pop();
    }
  }
  return stringArr.join("");
}
