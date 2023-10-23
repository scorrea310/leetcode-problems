// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/
// Time: O(n^2)
// Space: O(n)
function kWeakestRows(mat: number[][], k: number): number[] {
  let ans = [];
  let map = {};
  let start = 0;
  while (start < mat.length) {
    if (!map[start]) {
      let num1s = countOnes(mat[start]);
      map[start] = num1s;
    }
    start++;
  }

  start = 0;
  let smallest = [Infinity, 0];
  while (ans.length < k) {
    if (map[start] !== "s") {
      if (map[start] < smallest[0]) {
        smallest[0] = map[start];
        smallest[1] = start;
      }
    }

    if (start === mat.length - 1) {
      ans.push(smallest[1]);
      map[smallest[1]] = "s";
      smallest = [Infinity, 0];
      start = 0;
      continue;
    }
    start++;
  }
  return ans;
}

function countOnes(arr: number[]): number {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
