// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
// time and space: O(n)
function findSpecialInteger(arr: number[]): number {
  if (arr.length < 3) return arr[0];
  let minOccur = Math.floor(arr.length * 0.25);
  let occur = {};

  for (const num of arr) {
    if (num in occur) {
      occur[num]++;
      if (occur[num] > minOccur) return num;
    } else {
      occur[num] = 1;
    }
  }
}
