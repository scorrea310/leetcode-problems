# https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75
# Time: O(m + n)
# Space: O(m + n)
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        nums_1_map = {}
        nums_2_map = {}
        nums_1_distinct = []
        nums_2_distinct = []

        for ele in nums1:
            if ele not in nums_1_map:
                nums_1_map[ele] = 1
                nums_1_distinct.append(ele)

        for ele in nums2:
            if ele not in nums_2_map:
                nums_2_map[ele] = 1
                nums_2_distinct.append(ele)

        answer_arr_1 = []
        answer_arr_2 = []

        for ele in nums_1_distinct:
            if ele not in nums_2_map:
                answer_arr_1.append(ele)

        for ele in nums_2_distinct:
            if ele not in nums_1_map:
                answer_arr_2.append(ele)

        return [answer_arr_1, answer_arr_2]
