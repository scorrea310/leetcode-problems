// https://leetcode.com/problems/kth-missing-positive-number/description/
// Time: O(n)
// Space: O(1)
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

// Time: log(n)
//Space: O(1)
function findKthPositiveLogN(arr: number[], k: number): number {
  let start: number = 0;
  let end: number = arr.length - 1;

  while (start <= end) {
    const middle: number = Math.floor((end - start) / 2) + start;

    if (arr[middle] - (middle + 1) >= k) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return start + k;
}
