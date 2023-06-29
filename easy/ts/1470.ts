// https://leetcode.com/problems/shuffle-the-array/description/

// Time Complexity: O(n)
// Space Complexity: O(1) output array not considered extra space
function shuffle(nums: number[], n: number): number[] {
  let answer: number[] = [];
  let left: number = 0;
  let right: number = n;

  while (left < n && right < nums.length) {
    answer.push(nums[left]);
    answer.push(nums[right]);
    left++;
    right++;
  }
  return answer;
}
