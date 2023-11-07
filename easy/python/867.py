class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        ans = []
        for col in range(len(matrix[0])):
            new_arr = []
            for row in range(len(matrix)):
                new_arr.append(matrix[row][col])
            ans.append(new_arr)
        return ans
        