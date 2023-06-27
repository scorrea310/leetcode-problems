// https://leetcode.com/problems/power-of-two/description/
// Time Complexity: O(log(n))
//Space Complexity: O(1)
function isPowerOfTwo(n: number): boolean {
    if(n === 1 || n === 2) return true
    if(n === 0) return false
    while(n % 2 === 0) {
        n = n / 2
    }
    return n === 1
};