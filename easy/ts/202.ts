// https://leetcode.com/problems/happy-number/description/
// Space and Time: log(n)
function isHappy(n: number): boolean {
  let set = new Set();
  set.add(n);

  while (n !== 1) {
    let newN = 0;
    while (n > 0) {
      let lastDigit = n % 10;
      newN += lastDigit * lastDigit;
      n = Math.floor(n / 10);
    }
    n = newN;
    if (set.has(n)) {
      return false;
    } else {
      set.add(n);
    }
  }

  return true;
}
