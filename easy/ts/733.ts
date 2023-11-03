// https://leetcode.com/problems/flood-fill/
// Time and Space: O(n)
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  let visited = new Set();
  visited.add(`${sr}, ${sc}`);
  let stack = [[sr, sc]];

  while (stack.length > 0) {
    let currCell = stack.pop();
    let neighbors = getNeighbors(currCell, image, image[sr][sc]);
    for (let i = 0; i < neighbors.length; i++) {
      let neighborString = `${neighbors[i][0]}, ${neighbors[i][1]}`;
      if (!visited.has(neighborString)) {
        visited.add(neighborString);
        stack.push(neighbors[i]);
        image[neighbors[i][0]][neighbors[i][1]] = color;
      }
    }
  }
  image[sr][sc] = color;
  return image;
}

function getNeighbors(
  coordinate: number[],
  image: number[][],
  color: number
): number[][] {
  let answer: number[][] = [];
  let x = coordinate[0];
  let y = coordinate[1];
  if (image[x - 1] !== undefined) {
    if (image[x - 1][y] === color) {
      answer.push([x - 1, y]);
    }
  }
  if (image[x + 1] !== undefined) {
    if (image[x + 1][y] === color) {
      answer.push([x + 1, y]);
    }
  }

  if (image[x][y + 1] !== undefined) {
    if (image[x][y + 1] === color) {
      answer.push([x, y + 1]);
    }
  }

  if (image[x][y - 1] !== undefined) {
    if (image[x][y - 1] === color) {
      answer.push([x, y - 1]);
    }
  }

  return answer;
}
