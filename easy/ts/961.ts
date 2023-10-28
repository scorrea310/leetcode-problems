//leetcode.com/problems/n-repeated-element-in-size-2n-array/description/
// Time and Space: O(n)
https: function repeatedNTimes(nums: number[]): number {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    }
    map[nums[i]] = 1;
  }
}
