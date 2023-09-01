// https://leetcode.com/problems/kth-missing-positive-number/description/
// Time and Space: O(n)
function findKthPositive(arr: number[], k: number): number {
  let numMissing = 0;
  let i = 1;
  let j = 0;
  let num;
  while (numMissing !== k) {
    if (arr[j] === i) {
      j++;
      i++;
    } else {
      num = i;
      i++;
      numMissing++;
    }
  }
  return num;
}
