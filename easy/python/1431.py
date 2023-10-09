# https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        largest = 0
        answer = []

        for ele in candies:
            if ele > largest:
                largest = ele
        for ele in candies:
            if ele + extraCandies >= largest:
                answer.append(True)
            else:
                answer.append(False)
        return answer
