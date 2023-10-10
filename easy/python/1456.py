# https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        startMax = 0
        vowels = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1}
        for index in range(k):
            if s[index] in vowels:
                startMax += 1
        if len(s) == 1:
            return startMax
        start = 0
        end = k - 1

        currVowels = startMax
        while end + 1 < len(s):
            start += 1
            end += 1
            if s[start - 1] not in vowels and s[end] in vowels:
                currVowels += 1
                if currVowels > startMax:
                    startMax = currVowels
            elif s[end] not in vowels and s[start - 1] in vowels:
                currVowels -= 1
        return startMax
