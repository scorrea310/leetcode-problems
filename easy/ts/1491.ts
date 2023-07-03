// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/
// Time: O(n)
// Space: O(1)
function average(salary: number[]): number {
  let max = 0;
  let min = Infinity;
  let total = 0;
  for (let i = 0; i < salary.length; i++) {
    total += salary[i];
    if (salary[i] > max) {
      max = salary[i];
    }
    if (salary[i] < min) {
      min = salary[i];
    }
  }
  return Math.abs(total - (max + min)) / Math.abs(2 - salary.length);
}
