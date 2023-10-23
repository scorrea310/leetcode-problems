// https://leetcode.com/problems/complement-of-base-10-integer/
// Time: O(n)
// Space: O(n)
function bitwiseComplement(n: number): number {
  let binaryN = n.toString(2);
  let newBinaryNumArr: string[] = [];
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === "0") {
      newBinaryNumArr.push("1");
    } else {
      newBinaryNumArr.push("0");
    }
  }
  return parseInt(newBinaryNumArr.join(""), 2);
}
