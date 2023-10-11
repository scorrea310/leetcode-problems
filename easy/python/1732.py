# https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        max_val = 0
        current_val = 0

        for ele in gain:
            current_val += ele
            if current_val > max_val:
                max_val = current_val
        return max_val
