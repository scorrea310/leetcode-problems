/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/


var findDuplicate = function (nums) {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = nums[i]
        } else {
            return nums[i]
        }
    }
};

/*

Time Complexity: I'm looping through the array once so that's Linear: O(n)

space complexity: 

*/