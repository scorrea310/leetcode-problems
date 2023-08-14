# https://leetcode.com/problems/build-array-from-permutation/submissions/
# Time and Space: O(n)
class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        answer = []

        for i in range(len(nums)):
            answer.append(nums[nums[i]])
        return answer
