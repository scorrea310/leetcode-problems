// https://leetcode.com/problems/container-with-most-water/description/
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxArea(height: number[]): number {
    let max = 0
    let left = 0
    let right = height.length - 1

    while(left !== right) {
        let base = height[left] < height[right] ? height[left] : height[right]
        let difference = Math.abs(right - left)

        if(base * difference > max) {
            max = base * difference
        }

        if(height[left] >= height[right]) {
            right = right - 1
        } else if(height[right] > height[left]) {
            left += 1
        }
    }
    return max
};