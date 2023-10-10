# https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
# Time and Space: O(n)
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magazine_map = {}

        for ele in magazine:
            if ele in magazine_map:
                magazine_map[ele] += 1
            else:
                magazine_map[ele] = 1

        for ele in ransomNote:
            if ele in magazine_map and magazine_map[ele] > 0:
                magazine_map[ele] -= 1
            else:
                return False
        return True
