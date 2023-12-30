// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(1)
function increasingTriplet(nums: number[]): boolean {
  let smallest = nums[0];
  let secondSmallest;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < smallest) {
      smallest = num;
    } else if (num > smallest) {
      if (secondSmallest === undefined || num < secondSmallest) {
        secondSmallest = num;
      } else if (num > secondSmallest) {
        return true;
      }
    } else if (num > smallest && num > secondSmallest) {
      return true;
    }
  }
  return false;
}
