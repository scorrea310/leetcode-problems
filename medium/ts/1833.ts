// https://leetcode.com/problems/maximum-ice-cream-bars/description/
// Time Complexity: O(n * log(n)) sort()
// Time Complexity: O(log(n)) javascript sort() space complexity

function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b)=> a - b)
    let total = 0
    let iceCreamBars = 0
    for(let i = 0; i < costs.length; i++) {
        if(costs[i] + total <= coins) {
            total += costs[i]
            iceCreamBars++
        } else {
            break
        }
    }

    return iceCreamBars
};