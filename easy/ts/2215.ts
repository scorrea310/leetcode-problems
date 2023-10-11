// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75
// Time: O(m + n)
// Space: O(m + n)
function findDifference(nums1: number[], nums2: number[]): number[][] {
  let nums1Map = {};
  let nums2Map = {};
  let nums1Distinct: number[] = [];
  let nums2Distinct: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums1Map[nums1[i]]) {
      nums1Map[nums1[i]] = 1;
      nums1Distinct.push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums2Map[nums2[i]]) {
      nums2Map[nums2[i]] = 1;
      nums2Distinct.push(nums2[i]);
    }
  }

  let answerArr1: number[] = [];
  let answerArr2: number[] = [];

  for (let i = 0; i < nums1Distinct.length; i++) {
    if (!nums2Map[nums1Distinct[i]]) {
      answerArr1.push(nums1Distinct[i]);
    }
  }

  for (let i = 0; i < nums2Distinct.length; i++) {
    if (!nums1Map[nums2Distinct[i]]) {
      answerArr2.push(nums2Distinct[i]);
    }
  }
  return [answerArr1, answerArr2];
}
