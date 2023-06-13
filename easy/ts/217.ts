// https://leetcode.com/problems/contains-duplicate/description/
//Time complexity: O(n)
// Space Complexity: O(n)
function containsDuplicate(nums: number[]): boolean {
    let uniqueNums = {}

    for(let i = 0; i < nums.length; i++) {
        if(uniqueNums[nums[i]] === undefined) {
            uniqueNums[nums[i]] = 1
        } else {
            return true
        }  
    }
    return false
};