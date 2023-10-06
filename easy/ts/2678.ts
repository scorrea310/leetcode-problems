// https://leetcode.com/problems/number-of-senior-citizens/
// Time Complexity and Space: (1)
function countSeniors(details: string[]): number {
  let total = 0;
  let i = 0;

  while (i < details.length) {
    let ageNumber = Number(details[i][11] + details[i][12]);
    if (ageNumber > 60) {
      total++;
    }
    i++;
  }
  return total;
}
