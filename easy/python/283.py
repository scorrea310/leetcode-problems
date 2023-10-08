# https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        totalNonZeros = 0

        for element in nums:
            if element != 0:
                nums[totalNonZeros] = element
                totalNonZeros += 1

        while totalNonZeros < len(nums):
            nums[totalNonZeros] = 0
            totalNonZeros += 1
