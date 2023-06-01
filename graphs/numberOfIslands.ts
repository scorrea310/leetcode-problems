function getNeightbors(row: number, col: number, grid: string[][]): number[][] {
    let neighbors = []
    // top
    if(row >= 1 && (col <= 300 && col >= 0)) {
        if(grid[row - 1][col] === '1') {
            neighbors.push([row - 1, col])
        }
    }
    //bottom
    if(row + 1 <= grid.length - 1 && (col <= 300 && col >= 0)) {
        if(grid[row + 1][col] === '1') {
            neighbors.push([row + 1, col])
        }
    }
    //right
    if(col + 1 <= grid[row].length - 1 && (row >= 0 && row <= grid.length - 1)) {
        if(grid[row][col + 1] === '1') {
            neighbors.push([row, col + 1])
        }
    }
    // left
    if(col - 1 >= 0 && (row >= 0 && row <= grid.length - 1)) {
       if(grid[row][col - 1] === '1') {
            neighbors.push([row, col - 1])
        } 
    }

    return neighbors
}

function dfs(row: number, column: number, grid: string[][]) {
    let stack = [[row, column]]
    let visited = new Set();
    visited.add(`${row}, ${column}`)

    while(stack.length > 0) {
        let firstOnStack = stack.pop()
        grid[firstOnStack[0]][firstOnStack[1]] = '0'
        
        let neighbors = getNeightbors(firstOnStack[0], firstOnStack[1], grid)
        for(let i = 0; i < neighbors.length; i++) {
            let stringNeighbor = `${neighbors[i][0]}, ${neighbors[i][1]}` 
            if(visited.has(stringNeighbor) === false) {
                visited.add(stringNeighbor)
                stack.push(neighbors[i])
            }
        }
    }
}

function numIslands(grid: string[][]): number {
    let islands = 0

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
              console.log(`i is ${i} and j is ${j}`)
                islands++
                dfs(i, j, grid)
            }
        } 
    }
    return islands
};
