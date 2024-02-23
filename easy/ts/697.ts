// https://leetcode.com/problems/degree-of-an-array/
// Time and space: O(n)
function findShortestSubArray(nums: number[]): number {
  if (nums.length === 1) return 1;

  let maxOccurences = 1;
  let occurMap = {};

  for (const i in nums) {
    let num = nums[i];
    if (num in occurMap) {
      occurMap[num].push(i);
      if (occurMap[num].length > maxOccurences) {
        maxOccurences = occurMap[num].length;
      }
    } else {
      occurMap[num] = [i];
    }
  }

  if (maxOccurences === 1) return 1;
  let smallesSubArr = Infinity;
  for (const key in occurMap) {
    let value = occurMap[key];

    if (value.length === maxOccurences) {
      let a = value[0];
      let b = value[value.length - 1];
      if (Math.abs(a - b) + 1 < smallesSubArr) {
        smallesSubArr = Math.abs(a - b) + 1;
      }
    }
  }
  return smallesSubArr;
}
