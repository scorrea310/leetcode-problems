// https://leetcode.com/problems/maximum-subarray/description/
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubArray(nums: number[]): number {
    let currentSubarray = nums[0]
    let maxSubarray = nums[0]

    for(let i = 1; i < nums.length; i++) {
        let num = nums[i]

        currentSubarray = Math.max(num, currentSubarray + num);
        maxSubarray = Math.max(maxSubarray, currentSubarray);
    }

    return maxSubarray
};