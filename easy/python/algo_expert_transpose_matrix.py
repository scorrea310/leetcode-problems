def transposeMatrix(matrix):
    answer = []
    i = 0
    j = 0
    while i < len(matrix[0]):
        element_arr = []
        while j < len(matrix):
            element_arr.append(matrix[j][i])
            j += 1
        answer.append(element_arr)
        j = 0
        i += 1
    return answer
