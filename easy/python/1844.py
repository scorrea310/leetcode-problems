# https://leetcode.com/problems/replace-all-digits-with-characters/description/
# Time Complexity: O(n)
# Space Complexity: O(n)


class Solution:
    def replaceDigits(self, s: str) -> str:
        char_array = [char for char in s]
        curr_odd = 1

        while curr_odd < len(s):
            prev_char_num = ord(s[curr_odd - 1])
            char_array[curr_odd] = chr(prev_char_num + int(char_array[curr_odd]))
            curr_odd = curr_odd + 2
        return "".join(char_array)
