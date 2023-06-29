// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// Time Complexity: O(n)
// Space Compelxity: O(1)

function twoSum(numbers: number[], target: number): number[] | undefined {
    if(numbers.length === 2) return [1, 2]
    if(numbers[0] + numbers[numbers.length - 1] === target) return [1, numbers.length]

    let left = 0
    let right = numbers.length - 1

    while(left <= right) {
        if(numbers[left] + numbers[right] > target) {
            right--
        } else if (numbers[left] + numbers[right] < target) {
            left++
        } else {
            return [left + 1, right + 1]
        }
    }
};