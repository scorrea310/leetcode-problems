// https://leetcode.com/problems/intersection-of-two-arrays/submissions/
// time: O(n1 + n2 + m), space: O(n1 + min(n1, n2) + m)
function intersection(nums1: number[], nums2: number[]): number[] {
  let set = new Set(nums1);
  let result = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) result.add(nums2[i]);
  }
  return Array.from(result) as number[];
}
