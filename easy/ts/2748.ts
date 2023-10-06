// https://leetcode.com/problems/number-of-beautiful-pairs/
// Time Complexity: O(n^2)
// Space Comexplity: O(1)
function countBeautifulPairs(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      while (nums[i] > 9) {
        nums[i] = Math.floor(nums[i] / 10);
      }

      if (areCoprime(nums[i], nums[j] % 10)) {
        count++;
      }
    }
  }
  return count;
}

function areCoprime(x: number, y: number): boolean {
  if (x === 1 || y === 1) return true;
  if (x === y && x > 1) {
    return false;
  }

  let max = x < y ? x : y;

  for (let i = 2; i <= max; i++) {
    if (x % i === 0 && y % i === 0) {
      return false;
    }
  }
  return true;
}
