// https://leetcode.com/problems/count-symmetric-integers/
// Time: O(n⋅k)
// Space: O(1)
function countSymmetricIntegers(low: number, high: number): number {
  let count = 0;
  for (let i = low; i <= high; i++) {
    let numString = i.toString();
    if (numString.length % 2 === 0) {
      if (isSymmetrica(numString)) count++;
    }
  }
  return count;
}

function isSymmetrica(numString: string) {
  let half = Math.floor(numString.length / 2);
  let totalLeft = 0;
  let totalRight = 0;

  for (let i = 0; i < numString.length; i++) {
    let char = numString[i];
    if (i < half) {
      totalLeft += Number(char);
    } else if (i >= half) {
      totalRight += Number(char);
    }
  }

  return totalLeft === totalRight;
}
