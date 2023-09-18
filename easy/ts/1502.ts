// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/editorial/
// Time: O(n⋅logn)
// Space: O(logn)
function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length < 3) return true;
  arr.sort((a, b) => a - b);
  let diff = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== diff) return false;
  }

  return true;
}
