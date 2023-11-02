// https://leetcode.com/problems/valid-word-abbreviation/
// Time: O(n + m), n===word.length, m===abbr.length
// Space: O(1)
function validWordAbbreviation(word: string, abbr: string): boolean {
  let i = 0;
  let currAbbrIndex = 0;
  while (i < word.length && currAbbrIndex < abbr.length) {
    if (word[i] === abbr[currAbbrIndex]) {
      i++;
      currAbbrIndex++;
    } else if (!isNaN(Number(abbr[currAbbrIndex]))) {
      if (Number(abbr[currAbbrIndex]) === 0) return false;
      if (abbr[currAbbrIndex + 1] && !isNaN(Number(abbr[currAbbrIndex + 1]))) {
        if (abbr[currAbbrIndex + 2] && !isNaN(Number(abbr[currAbbrIndex + 2])))
          return false;
        let numberToSkip = Number(
          abbr[currAbbrIndex] + abbr[currAbbrIndex + 1]
        );
        if (i + numberToSkip > word.length) return false;
        i += numberToSkip;
        currAbbrIndex += 2;
      } else {
        let numberToSkip = Number(abbr[currAbbrIndex]);
        if (i + numberToSkip > word.length) return false;
        i += numberToSkip;
        currAbbrIndex += 1;
      }
    } else {
      return false;
    }
  }
  return i === word.length && currAbbrIndex === abbr.length;
}
