// https://leetcode.com/problems/add-digits/description/
// Time Complexity: O(log(n)) base 10 i think?
// Space Compelxity: O(1)

function addDigits(num: number): number {
  while (num >= 10) {
    let right = num % 10;
    let left = Math.floor(num / 10);
    num = left + right;
  }
  return num;
}
