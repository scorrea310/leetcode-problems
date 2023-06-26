// https://leetcode.com/problems/fibonacci-number/description/

// Time Complexity: O(2^n)
// Space Complexity: O(n) takes up n calls on the call stack
function fib(n: number): number {
    if(n === 0) return 0
    if(n === 1) return 1
    return fib(n - 1) + fib(n - 2)
};

// Iterative Solution
// Time Complexity: O(n)
// Space Complexity: O(1) 
function fibIterative(n: number): number {
    if(n === 0) return 0
    let start = 0
    let next = 1

    for(let i = 1; i < n; i++) {
        let oldNext = next
        next = start + next
        start = oldNext
    }
    return next
}