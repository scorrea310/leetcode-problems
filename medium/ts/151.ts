// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

// Time: O(n)
// Space: O(n)
function reverseWords(s: string): string {
  let firstWord;
  let lastWord;
  let wordsArray = s.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] !== "") {
      firstWord = i;
      break;
    }
  }

  for (let i = wordsArray.length - 1; i >= 0; i--) {
    if (wordsArray[i] !== "") {
      lastWord = i;
      break;
    }
  }

  let answerArray: string[] = [];
  let j = lastWord;
  while (j >= firstWord) {
    if (wordsArray[j] !== "") {
      answerArray.push(wordsArray[j]);
      if (j !== firstWord) {
        answerArray.push(" ");
      }
    }
    j--;
  }

  return answerArray.join("");
}
