# https://leetcode.com/problems/remove-vowels-from-a-string/description/
# Time: O(n)
# Space: O(n)
class Solution:
    def removeVowels(self, s: str) -> str:
        non_vowels = []

        for char in s:
            if (
                char != "a"
                and char != "e"
                and char != "i"
                and char != "o"
                and char != "u"
            ):
                non_vowels.append(char)
        return "".join(non_vowels)
