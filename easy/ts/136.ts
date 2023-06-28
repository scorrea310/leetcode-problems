// https://leetcode.com/problems/single-number/description/
// Time Complexity: O(n)
// Space Complexity: (1)
var singleNumber = function(nums) {
    let n = nums.length;
    let c = 0;
    for (let i = 0; i < n; i++) {
        c = c ^ nums[i];
    }
    return c; 
};