// https://leetcode.com/problems/binary-search/description/
// Time Complexity: O(log(n))
// Space Complexity: O(1)
function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    let middle: number;
    while(left <= right) {
        middle = Math.floor(right - left / 2)
        if(nums[middle] === target) return middle
        if(nums[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
};