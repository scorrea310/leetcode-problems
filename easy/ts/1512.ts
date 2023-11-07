// https://leetcode.com/problems/number-of-good-pairs/
// Time: O(n)
// Space: O(n) worst case keys in map is n
function numIdenticalPairs(nums: number[]): number {
  let map = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  for (let key in map) {
    if (map[key] < 2) continue;
    let pairs = (map[key] * (map[key] - 1)) / 2;
    count += pairs;
  }
  return count;
}
