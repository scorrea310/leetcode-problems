// https://leetcode.com/problems/pascals-triangle/description/
// Time Complexity: O(numRows ^ 2)
// Space Complexity: O(1)
function generate(numRows: number): number[][] {
    let answer = [[1]]
    let start = [1, 1]
    let count = 1
    while(count < numRows) {
        answer.push(start)
        let newRow: number[] = []
        for(let i = 0; i <= start.length; i++) {
            if(i === 0 || i === start.length) {
                newRow.push(1)
            } else {
                newRow.push(start[i - 1] + start[i])
            }
        }
        start = newRow
        count++
    }

    return answer
};