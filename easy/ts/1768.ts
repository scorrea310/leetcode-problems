// https://leetcode.com/problems/merge-strings-alternately/description/
// Time: O(m + n)
// Space: O(1)
function mergeAlternately(word1: string, word2: string): string {
  let answerArray = [];

  let word1Index = 0;
  let word2Index = 0;

  while (word1Index < word1.length || word2Index < word2.length) {
    if (word1Index < word1.length) {
      answerArray.push(word1[word1Index]);
      word1Index++;
    }
    if (word2Index < word2.length) {
      answerArray.push(word2[word2Index]);
      word2Index++;
    }
  }

  return answerArray.join("");
}
