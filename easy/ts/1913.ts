// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
// Time: O(n)
// Space: O(1)
function maxProductDifference(nums: number[]): number {
  let max: number[] = [nums[0], 0];
  let smallest = [nums[0], 0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > max[0] && i !== max[1]) {
      max = [num, i];
    }

    if (num < smallest[0] && i !== smallest[1]) {
      smallest = [num, i];
    }
  }

  let secondLargest = [0, 0];
  let secondSmallest = [Infinity, 0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > secondLargest[0] && i !== max[1]) {
      secondLargest = [num, i];
    }

    if (num < secondSmallest[0] && i !== smallest[1]) {
      secondSmallest = [num, i];
    }
  }

  return max[0] * secondLargest[0] - smallest[0] * secondSmallest[0];
}
