// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n)
// Space: O(1)
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let openSpots = 0;
  let start = 0;

  while (start < flowerbed.length) {
    if (start === 0) {
      if (flowerbed[start + 1] !== 1 && flowerbed[start] === 0) {
        flowerbed[start] = 1;
        openSpots++;
        start += 2;
      } else {
        start++;
      }
    } else if (start === flowerbed.length - 1) {
      if (flowerbed[start - 1] === 0 && flowerbed[start] === 0) {
        flowerbed[start] = 1;
        openSpots++;
        start += 2;
      } else {
        start++;
      }
    } else {
      if (
        flowerbed[start + 1] !== 1 &&
        flowerbed[start - 1] !== 1 &&
        flowerbed[start] === 0
      ) {
        flowerbed[start] = 1;
        openSpots++;
        start += 2;
      } else {
        start++;
      }
    }
  }
  return openSpots >= n;
}
