// https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/description/
// time complexity: O(n)
// Space complexity: O(n) because of array with n letters. Or O(1) if you count array as part of the answer which it is.
function getSmallestString(n: number, k: number): string {
  let stringArray: string[] = [];
  const aAsciiValue = "a".charCodeAt(0) - 1;
  while (n > 0) {
    if ((n - 1) * 26 >= k) {
      stringArray.push("a");
      n--;
      k--;
    } else {
      let charAscciiValue = 26 - (n * 26 - k);
      let charFromAscii = String.fromCharCode(aAsciiValue + charAscciiValue);
      stringArray.push(charFromAscii);
      n--;
      k = k - charAscciiValue;
    }
  }
  return stringArray.join("");
}
