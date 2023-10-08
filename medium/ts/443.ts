// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n^2)
// Space: O(1)
function compress(chars: string[]): number {
  if (chars.length === 1) return 1;

  let total = 1;
  let end = chars.length - 1;
  let index = 1;
  let currChar = chars[0];

  while (index <= end + 1) {
    if (chars[index] === currChar && index < end + 1) {
      total++;
    } else if (total > 1) {
      let totalCharValue = numberToChars(total);
      chars.push(currChar, ...totalCharValue);
      currChar = chars[index];
      total = 1;
    } else {
      chars.push(currChar);
      currChar = chars[index];
      total = 1;
    }
    index++;
  }

  for (let i = 0; i <= end; i++) {
    chars.shift();
  }

  return chars.length;
}

function numberToChars(num: number): string[] {
  let stringNum = num.toString();

  return stringNum.split("");
}
