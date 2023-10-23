class Solution:
    def bitwiseComplement(self, n: int) -> int:
        binary_string_n = format(n, "b")
        array = []

        for num in binary_string_n:
            if num == "0":
                array.append("1")
            else:
                array.append("0")
        return int("".join(array), 2)
