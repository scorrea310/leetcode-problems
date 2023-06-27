// https://leetcode.com/problems/move-zeroes/description/
// Time Complexity: O(n)
// Space Complexity: O(1)
function moveZeroes(nums: number[]): void {
   let currentIndexToChange = 0
   for(let i = 0; i < nums.length; i++) {
       if(nums[i] !== 0) {
           nums[currentIndexToChange] = nums[i]
           currentIndexToChange++
       }
   }

   while(currentIndexToChange < nums.length) {
       nums[currentIndexToChange] = 0
       currentIndexToChange++
   }
};