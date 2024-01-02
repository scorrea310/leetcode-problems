# https://leetcode.com/problems/maximum-product-of-three-numbers/description/?source=submission-noac
# Time: O(n * log(n))
# Space: O(n)
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        if len(nums) == 3:
            return nums[0] * nums[1] * nums[2]
        nums.sort()
        left_sum = nums[0] * nums[1] * nums[len(nums) - 1]
        right_sum = nums[len(nums) - 1] * nums[len(nums) - 2] * nums[len(nums) - 3]
        return left_sum if left_sum > right_sum else right_sum
