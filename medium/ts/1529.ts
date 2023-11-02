// https://leetcode.com/problems/minimum-suffix-flips/
// Time: O(n)
// Space: O(1)
function minFlips(target: string): number {
  let firstChar = target[0];
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== firstChar) {
      break;
    }
    if (i === target.length - 1 && target[i] === firstChar) {
      if (target[0] === "1") return 1;
      return 0;
    }
  }

  let curr;
  for (let i = 0; i < target.length; i++) {
    if (target[i] === "1") {
      curr = i;
      break;
    }
  }

  let lastChar = "1";
  let count = 1;
  while (curr < target.length) {
    if (target[curr] !== lastChar) {
      count++;
      lastChar = target[curr];
    }
    curr++;
  }
  return count;
}
