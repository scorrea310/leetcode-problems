// https://leetcode.com/problems/majority-element/description/
// Time Complexity: O(n)
// Space Complexity: O(n)
function majorityElement(nums: number[]): number {
    let obj = {}
    let maxNumber = nums[0]
    let max = 1

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(obj[num] === undefined) {
            obj[num] = 1
        } else {
            obj[num]++
            if(obj[num] > max) {
                max = obj[num]
                maxNumber = num
            }
        }
    }

    return maxNumber
};