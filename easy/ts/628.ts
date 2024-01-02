// https://leetcode.com/problems/maximum-product-of-three-numbers/?source=submission-noac
// Time: O(n * log(n))
// Space: O(n)
function maximumProduct(nums: number[]): number {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];
  nums.sort((a, b) => a - b);
  let leftMax = nums[0] * nums[1] * nums[nums.length - 1];
  let rightMax =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  return leftMax > rightMax ? leftMax : rightMax;
}
