// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// Time and Space: O(n)
function minRemoveToMakeValid(s: string): string {
  let parenthesesStack: [s: string, i: number][] = [];
  let indexToSkip = {};
  let i = 0;
  while (i < s.length) {
    let char = s[i];
    if (char === "(") {
      parenthesesStack.push(["(", i]);
      indexToSkip[i] = 1;
    } else if (char === ")") {
      if (
        parenthesesStack.length > 0 &&
        parenthesesStack[parenthesesStack.length - 1][0] === "("
      ) {
        let poppedEle = parenthesesStack.pop();
        delete indexToSkip[poppedEle[1]];
      } else {
        parenthesesStack.push([")", i]);
        indexToSkip[i] = 1;
      }
    }
    i++;
  }
  if (parenthesesStack.length === s.length) return "";
  let newStringArr = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!(i in indexToSkip)) {
      newStringArr.push(char);
    }
  }

  return newStringArr.join("");
}
