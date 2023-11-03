// https://leetcode.com/problems/summary-ranges/
// Time: O(n)
// Space: O(1)
function summaryRanges(nums: number[]): string[] {
  let ans: string[] = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums[0].toString()];
  let startRange = nums[0];
  let i = 0;
  while (i < nums.length) {
    if (nums[i] + 1 === nums[i + 1]) {
      i++;
    } else {
      if (nums[i] === startRange) {
        ans.push(startRange.toString());
      } else {
        ans.push(`${startRange}->${nums[i]}`);
      }
      i++;
      startRange = nums[i];
    }
  }
  return ans;
}
