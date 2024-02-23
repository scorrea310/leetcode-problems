// https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/
// Time: O(n)
// Space: O(1)
function totalMoney(n: number): number {
  let total = 0;
  let j = 1;
  while (n > 0) {
    let currNumber = j;
    let dayInWeek = 0;
    while (dayInWeek < 7 && n > 0) {
      total += currNumber;
      currNumber++;
      n--;
      dayInWeek++;
    }
    j++;
  }
  return total;
}
