# https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
# Time and Space: O(n)
class Solution:
    def reverseWords(self, s: str) -> str:
        wordsArray = s.split(" ")

        firstWordIndex = None
        lastWordIndex = None

        for index in range(len(wordsArray)):
            if wordsArray[index] != "":
                firstWordIndex = index
                break

        last = len(wordsArray) - 1
        while last >= 0:
            if wordsArray[last] != "":
                lastWordIndex = last
                break
            last = last - 1

        answerArray = []
        while last >= firstWordIndex:
            if wordsArray[last] != "":
                answerArray.append(wordsArray[last])
                if last != firstWordIndex:
                    answerArray.append(" ")
            last = last - 1

        return "".join(answerArray)
