 let matrix = [
        [1,1,1,0,0],
        [0,1,1,0,1],
        [0,1,1,0,1],
    ]

function getNeighbors(row, col, graph) {
  let neightbors = []
  if(row - 1 >= 0 && col >= 0 && col <= graph[row - 1].length - 1) {
    if(graph[row - 1][col] === 1) {
    neightbors.push([row - 1, col])
    } 
  }

  if(row + 1 <= graph.length - 1 && col >= 0 && col <= graph[row + 1].length - 1) {
    if (graph[row + 1][col] === 1) {
    neightbors.push([row + 1, col])
    }
  }
  
  if(graph[row] !== undefined && col - 1 >= 0 && col - 1 <= graph[row].length - 1) {
    if (graph[row][col - 1] === 1) {
    neightbors.push([row, col - 1])
    }
  }
  
  if(graph[row] !== undefined && col + 1 >= 0 && col + 1 <= graph[row].length - 1) {
    if(graph[row][col + 1] === 1) {
    neightbors.push([row, col + 1])
    }
  }
  return neightbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set()
  
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]]
  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`)

  // Initialize size to 0
  let size = 0
  // While the stack is not empty,
  while(stack.length > 0) {
    let firstNode = stack.pop();
    size++

    let neighbors = getNeighbors(firstNode[0], firstNode[1], graph)
    for(let i = 0; i < neighbors.length; i++) {
      let stringNeighbor = `${neighbors[i][0]}, ${neighbors[i][1]}`
      if(visited.has(stringNeighbor) === false) {
        visited.add(stringNeighbor)
        stack.push(neighbors[i])
      }
    }
  }
  return size
}

console.log(islandSize(0, 0, matrix))