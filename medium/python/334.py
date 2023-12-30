class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        smallest = nums[0]
        second_smallest = None

        for num in nums:
            if num < smallest:
                smallest = num
            elif num > smallest:
                if second_smallest is None or num < second_smallest:
                    second_smallest = num
                elif num > second_smallest:
                    return True
        return False
