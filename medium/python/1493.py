# https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        count = 0
        left = 0
        right = 0
        max_val = 0

        while right < len(nums):
            if nums[right] == 0:
                count += 1
            while count > 1:
                if nums[left] == 0:
                    count -= 1
                left += 1
            max_val = max(max_val, right - left)
            right += 1

        if max_val == len(nums):
            return max_val - 1
        else:
            return max_val
