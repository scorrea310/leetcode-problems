# https://leetcode.com/problems/find-the-difference/
# Time: O(n)
# Space: O(1)
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        s_map = {}
        for letter in s:
            if letter not in s_map:
                s_map[letter] = 1
            else:
                s_map[letter] += 1
        for letter in t:
            if letter not in s_map or s_map[letter] == 0:
                return letter
            else:
                s_map[letter] -= 1
