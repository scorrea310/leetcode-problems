// https://leetcode.com/problems/richest-customer-wealth/description/
// Time Complexity: O(m x n)
// Space Complexity: O(1)
function maximumWealth(accounts: number[][]): number {
    let max = 0

    for(let i = 0; i < accounts.length; i++) {
        let currentSum = 0
        for(let j = 0; j < accounts[i].length; j++) {
            currentSum += accounts[i][j]
        }
        if(currentSum > max) {
            max = currentSum
        }
    }
    return max
};