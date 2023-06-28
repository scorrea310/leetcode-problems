// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// Time Complexity: O(n * log(n))
// Space Complexity: O(log(n)) javascript sort()
function sortedSquares(nums: number[]): number[] {
    for(let i = 0 ;i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    nums.sort((a, b) => a - b)
    return nums
};