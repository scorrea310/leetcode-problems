// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(1)
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let largest = 0;
  let answer: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > largest) {
      largest = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= largest) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }
  return answer;
}
