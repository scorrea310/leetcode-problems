// https://leetcode.com/problems/set-mismatch/description/
// Time and Space: O(n)
function findErrorNums(nums: number[]): number[] {
  let occur = {};
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num in occur) {
      ans.push(num);
    } else {
      occur[num] = 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (!(i + 1 in occur)) {
      ans.push(i + 1);
    }
  }

  return ans;
}
