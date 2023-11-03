# https://leetcode.com/problems/summary-ranges/
# Time: O(n)
# Spae: O(1)
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ans = []
        if not nums:
            return ans

        start_range = nums[0]

        for i in range(1, len(nums)):
            # If the current number is not consecutive.
            if nums[i] != nums[i - 1] + 1:
                # End the current range and add it to the answer list.
                if start_range == nums[i - 1]:
                    ans.append(str(start_range))
                else:
                    ans.append(f"{start_range}->{nums[i - 1]}")
                start_range = nums[i]

        # After the loop, handle the last range or number.
        if start_range == nums[-1]:
            ans.append(str(start_range))
        else:
            ans.append(f"{start_range}->{nums[-1]}")

        return ans
