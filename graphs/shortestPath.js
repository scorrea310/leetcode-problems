let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

const shortestPath = (node1, node2) => {
    let queue = [[node1]]
    let visited = new Set()
    while(queue.length > 0) {
      let path = queue.shift()
      let currentNode = path[path.length - 1]
      if(currentNode === node2) {
        return path
      } else {
      for(let i = 0; i < adjList[currentNode].length; i++){
        if(visited.has(adjList[currentNode][i]) === false){
          visited.add(adjList[currentNode][i])
          queue.push([...path, adjList[currentNode][i]])
        }
      }
    }
  }
  return false
}

console.log(shortestPath(6, 2))
console.log(shortestPath(4, 1))