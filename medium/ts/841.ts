// https://leetcode.com/problems/keys-and-rooms/?envType=study-plan-v2&envId=leetcode-75
// Time: O(n + m)
// Space: O(n)
function canVisitAllRooms(rooms: number[][]): boolean {
  if (rooms[0].length === 0) return false;
  let stack = [0];
  let visited = new Set();
  let i = 0;
  let j = 0;

  while (stack.length > 0) {
    if (visited.has(i) && i === 0) stack.pop();
    while (j < rooms[i].length) {
      if (rooms[i][j] !== 0) {
        if (!visited.has(rooms[i][j])) {
          visited.add(rooms[i][j]);
          stack.push(rooms[i][j]);
        }
      }
      j++;
    }
    visited.add(i);
    i = stack.pop();
    j = 0;
  }
  for (let i = 0; i < rooms.length; i++) {
    if (!visited.has(i)) return false;
  }
  return true;
}
