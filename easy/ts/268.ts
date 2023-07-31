// https://leetcode.com/problems/missing-number/description/

// Time: O(n)
// Space: O(1)
function calculateFib(n: number): number {
  let prev = 1;
  for (let i = 2; i <= n; i++) {
    prev = prev + i;
  }
  return prev;
}

function missingNumber(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return calculateFib(nums.length) - sum;
}
