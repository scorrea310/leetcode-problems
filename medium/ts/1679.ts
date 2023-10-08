// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75
// Time Comexplity: O(n)
// Space Complexity: O(n)
function maxOperations(nums: number[], k: number): number {
  let numToOcc = {};
  nums.forEach((number) => {
    if (numToOcc[number]) {
      numToOcc[number]++;
    } else {
      numToOcc[number] = 1;
    }
  });

  let total = 0;
  nums.forEach((ele) => {
    let diff = k - ele;
    if (ele !== diff) {
      if (numToOcc[diff] >= 1 && numToOcc[ele] >= 1) {
        total++;
        numToOcc[diff]--;
        numToOcc[ele]--;
      }
    } else {
      if (numToOcc[ele] >= 2) {
        total++;
        numToOcc[diff]--;
        numToOcc[ele]--;
      }
    }
  });
  return total;
}
