// https://leetcode.com/problems/product-of-array-except-self/description/
// Time Complexity: O(n)
// Space Complexity: O(n)
function productExceptSelf(nums: number[]): number[] {
  let left = new Array(nums.length)
  let right = new Array(nums.length)
  left[0] = 1
  for(let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }
  right[right.length - 1] = 1
  for(let i = right.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }
  
  for(let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i]
  }

  return nums
};

// Time complexity: O(n)
// Space Complexity: O(1)
function productExceptSelfBetterSpaceComplexity(nums: number[]): number[] {
  let answer = new Array(nums.length)
  answer[0] = 1
  for(let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }
  let rightTotal = 1

  for(let i = answer.length - 1; i >=0; i--) {
    answer[i] = answer[i] * rightTotal
    rightTotal = rightTotal * nums[i]
  }

  return answer
};