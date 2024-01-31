// https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
// Time and Space: O(n)
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  let occWord1 = {};
  let occWord2 = {};
  for (let i = 0; i < word1.length; i++) {
    if (!occWord1[word1[i]]) {
      occWord1[word1[i]] = 1;
    } else {
      occWord1[word1[i]]++;
    }

    if (!occWord2[word2[i]]) {
      occWord2[word2[i]] = 1;
    } else {
      occWord2[word2[i]]++;
    }
  }

  let i = 0;
  while (i < word1.length) {
    let letter1Freq = occWord1[word1[i]];
    let letter2Freq = occWord2[word1[i]];
    if (letter1Freq && letter2Freq) {
      i++;
    } else {
      return false;
    }
  }

  let occNum1 = {};
  let occNum2 = {};

  let word1FreqNumbers: number[] = Object.values(occWord1);
  let word2FreqNumbers: number[] = Object.values(occWord2);

  for (const num of word1FreqNumbers) {
    if (occNum1[num] === undefined) {
      occNum1[num] = 1;
    } else {
      occNum1[num]++;
    }
  }

  for (const num of word2FreqNumbers) {
    if (occNum2[num] === undefined) {
      occNum2[num] = 1;
    } else {
      occNum2[num]++;
    }
  }

  let x = 0;

  while (x < word1FreqNumbers.length) {
    let freq1 = occNum1[word1FreqNumbers[x]];
    let freq2 = occNum2[word1FreqNumbers[x]];
    if (freq1 !== freq2) return false;
    x++;
  }

  return true;
}
