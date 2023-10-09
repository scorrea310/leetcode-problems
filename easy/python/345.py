# https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
# Time and Space: O(n)
class Solution:
    def reverseVowels(self, s: str) -> str:
        string_arr = list(s)
        vowels = {
            "a": 1,
            "e": 1,
            "i": 1,
            "o": 1,
            "u": 1,
            "A": 1,
            "E": 1,
            "I": 1,
            "O": 1,
            "U": 1,
        }

        vowels_array = []
        for letter in string_arr:
            if letter in vowels:
                vowels_array.append(letter)

        for index, letter in enumerate(string_arr):
            if letter in vowels:
                string_arr[index] = vowels_array.pop()
        return "".join(string_arr)
