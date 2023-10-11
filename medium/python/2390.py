# https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75
# Time and Space: O(n)
class Solution:
    def removeStars(self, s: str) -> str:
        char_stack = []

        for ele in s:
            if ele == "*":
                char_stack.pop()
            else:
                char_stack.append(ele)
        return "".join(char_stack)
