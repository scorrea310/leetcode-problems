// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// Time Complexity: O(n * log(n))
// Space Complexity: O(log(n)) javascript sort()
function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums.sort((a, b) => a - b);
  return nums;
}

// https://leetcode.com/problems/squares-of-a-sorted-array/
// Time and Space: O(n)
function sortedSquaresN(nums: number[]): number[] {
  let ansArr = new Array(nums.length).fill(null);
  let left = 0;
  let right = nums.length - 1;
  let end = nums.length - 1;
  while (left < right) {
    let leftNum = Math.abs(nums[left] ** 2);
    let rightNum = Math.abs(nums[right] ** 2);
    if (rightNum >= leftNum) {
      ansArr[end] = rightNum;
      right--;
    } else {
      ansArr[end] = leftNum;
      left++;
    }
    end--;
  }

  if (left === right) {
    ansArr[0] = nums[left] * nums[left];
  }
  return ansArr;
}
