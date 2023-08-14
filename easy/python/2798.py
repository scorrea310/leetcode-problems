# https://leetcode.com/problems/number-of-employees-who-met-the-target/submissions/
# Time: O(n)
# Space: O(1)
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        count = 0

        for worked_hours in hours:
            if worked_hours >= target:
                count += 1
        return count
