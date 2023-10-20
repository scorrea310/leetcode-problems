// https://leetcode.com/problems/excel-sheet-column-title/
// Time: O(log(n))
// Space: O(1)
function convertToTitle(columnNumber: number): string {
  let ans: string[] = [];

  while (columnNumber > 0) {
    columnNumber--;
    let charValue = String.fromCharCode((columnNumber % 26) + 65);
    ans.push(charValue);
    columnNumber = Math.floor(columnNumber / 26);
  }
  return ans.reverse().join("");
}
