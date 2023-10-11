// https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(1)
function largestAltitude(gain: number[]): number {
  let max = 0;
  let currentVal = 0;

  for (let i = 0; i < gain.length; i++) {
    currentVal += gain[i];
    if (currentVal > max) {
      max = currentVal;
    }
  }
  return max;
}
