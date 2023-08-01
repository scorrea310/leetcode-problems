// https://leetcode.com/problems/concatenation-of-array/description/
// Time and Space: O(n)
function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}
