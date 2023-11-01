// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Time and Space: O(n * m)
function reverseWords(s: string): string {
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      words[i] = reverseSingleWord(words[i]);
    }
  }
  return words.join(" ");
}

function reverseSingleWord(word: string): string {
  let left = 0;
  let right = word.length - 1;
  let letters = word.split("");
  while (left < right) {
    let oldLeft = word[left];
    letters[left] = word[right];
    letters[right] = oldLeft;
    left++;
    right--;
  }

  return letters.join("");
}
