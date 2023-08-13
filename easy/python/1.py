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
            if nums[i] in ordering and nums[i] * 2 == target:
                return [ordering[nums[i]], i]
            else:
                ordering[nums[i]] = i

        for element in nums:
            if (target - element) in ordering and target - element != element:
                if ordering[element] < ordering[target - element]:
                    return [ordering[element], ordering[target - element]]
                return [ordering[target - element], ordering[element]]
