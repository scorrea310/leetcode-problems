// https://leetcode.com/problems/sort-array-by-increasing-frequency/
// Time: O(n * log(n))
// Space: O(n)
function frequencySort(nums: number[]): number[] {
  let freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freq[nums[i]]) {
      freq[nums[i]] = [nums[i]];
    } else {
      freq[nums[i]].push(nums[i]);
    }
  }

  let sortedArr = Object.values(freq).sort((a: any, b: any) => {
    if (a.length === b.length) {
      return b[0] - a[0];
    }
    return a.length - b.length;
  });

  return sortedArr.flat() as number[];
}
