// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Time: O(min(n, n) * (m + n))
// Space: O(m + n)
function gcdOfStrings(str1: string, str2: string): string {
  if (str1.length === str2.length) return str1 === str2 ? str1 : "";

  let shorterString = str1.length <= str2.length ? str1 : str2;
  let longerString = str1.length >= str2.length ? str1 : str2;

  if (longerString.length % shorterString.length === 0) {
    let arr = [shorterString];
    for (let i = 1; i < longerString.length / shorterString.length; i++) {
      arr.push(shorterString);
    }
    if (arr.join("") === longerString) return shorterString;
  }
  let half = Math.floor(shorterString.length / 2);
  for (let i = half; i >= 0; i--) {
    let dividesBoth = isDivisor(i, shorterString, longerString);
    if (dividesBoth) return dividesBoth;
  }

  return "";
}

function isDivisor(
  j: number,
  shorterString: string,
  longerString: string
): string {
  if (longerString.length % j === 0 && shorterString.length % j === 0) {
    let slicedString = shorterString.slice(0, j);
    let fullShorterString = [slicedString];
    let fullLongerString = [slicedString];
    for (let i = 1; i < shorterString.length / j; i++) {
      fullShorterString.push(slicedString);
    }
    if (fullShorterString.join("") !== shorterString) return "";

    for (let i = 1; i < longerString.length / j; i++) {
      fullLongerString.push(slicedString);
    }
    if (fullLongerString.join("") === longerString) return slicedString;
    return "";
  }
}
