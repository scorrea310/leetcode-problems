// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/

// Time Complexity: O(n)
// Space Complexity: O(n)

function checkAlmostEquivalent(word1: string, word2: string): boolean {
  let mapA = {};
  let mapB = {};

  for (let i = 0; i < word1.length; i++) {
    if (mapA[word1[i]] === undefined) {
      mapA[word1[i]] = 1;
    } else if (mapA[word1[i]]) {
      mapA[word1[i]]++;
    }

    if (mapB[word2[i]] === undefined) {
      mapB[word2[i]] = 1;
    } else if (mapB[word2[i]]) {
      mapB[word2[i]]++;
    }
  }

  for (let i = 0; i < word1.length; i++) {
    let charBFreq = mapB[word1[i]] ? mapB[word1[i]] : 0;
    let charAFre = mapA[word2[i]] ? mapA[word2[i]] : 0;
    if (
      Math.abs(mapA[word1[i]] - charBFreq) > 3 ||
      Math.abs(mapB[word2[i]] - charAFre) > 3
    )
      return false;
  }
  return true;
}
