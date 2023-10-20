# https://leetcode.com/problems/excel-sheet-column-title/
# Time: O(log(n))
# Space: O(1)
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        answer = []

        while columnNumber > 0:
            columnNumber -= 1
            char = chr((columnNumber % 26) + 65)
            answer.append(char)
            columnNumber = columnNumber // 26
        answer.reverse()

        return "".join(answer)
