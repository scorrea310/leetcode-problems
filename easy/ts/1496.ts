// https://leetcode.com/problems/path-crossing/
// Time and Space: O(n)
function isPathCrossing(path: string): boolean {
  let directionToCordinates = {
    N: [0, 1],
    S: [0, -1],
    E: [-1, 0],
    W: [1, 0],
  };
  let visited = new Set();
  visited.add(`0, 0`);
  let currentSpot = [0, 0];

  for (const direction of path) {
    let directionCoordinates = directionToCordinates[direction];
    currentSpot = [
      currentSpot[0] + directionCoordinates[0],
      +currentSpot[1] + directionCoordinates[1],
    ];
    if (visited.has(`${currentSpot[0]}, ${currentSpot[1]}`)) {
      return true;
    } else {
      visited.add(`${currentSpot[0]}, ${currentSpot[1]}`);
    }
  }
  return false;
}
