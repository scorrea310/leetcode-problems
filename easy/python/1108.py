# https://leetcode.com/problems/defanging-an-ip-address/description/
# Time and Space: O(n)
class Solution:
    def defangIPaddr(self, address: str) -> str:
        char_array = [char for char in address]

        for i in range(len(char_array)):
            if char_array[i] == ".":
                char_array[i] = "[.]"
        return "".join(char_array)
