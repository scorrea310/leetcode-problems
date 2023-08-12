class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) == 2:
            return [0, 1]

        ordering = {}
        for i in range(len(nums)):
            if nums[i] in ordering:
                ordering[nums[i]] = [ordering[nums[i]], i]
            else:
                ordering[nums[i]] = i

        nums.sort()

        left = 0
        right = len(nums) - 1

        while left < right:
            left_num = nums[left]
            right_num = nums[right]

            if left_num + right_num == target:
                if left_num == right_num:
                    return ordering[left_num]
                return [ordering[left_num], ordering[right_num]]
            if left_num + right_num < target:
                left = left + 1
            else:
                right = right - 1

        if nums[left] == nums[right]:
            return ordering[nums[left]]
        return [ordering[nums[left]], ordering[nums[right]]]
