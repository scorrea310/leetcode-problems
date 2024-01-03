class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        wrong_chars_idxs = []

        for i in range(len(s1)):
            s1_lett = s1[i]
            s2_lett = s2[i]
            if s1_lett != s2_lett:
                wrong_chars_idxs.append(i)

        if len(wrong_chars_idxs) == 0:
            return True
        if len(wrong_chars_idxs) == 1 or len(wrong_chars_idxs) > 2:
            return False
        if s1[wrong_chars_idxs[0]] != s2[wrong_chars_idxs[1]]:
            return False
        if s2[wrong_chars_idxs[0]] != s1[wrong_chars_idxs[1]]:
            return False
        return True
