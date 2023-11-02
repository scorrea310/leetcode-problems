class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        i = 0
        abbr_index = 0
        while i < len(word) and abbr_index < len(abbr):
            if word[i] == abbr[abbr_index]:
                i += 1
                abbr_index += 1
            elif abbr[abbr_index].isdigit():
                if abbr[abbr_index + 1] in abbr and abbr[abbr_index + 1].isdigit():
                    integer_num = int(abbr[abbr_index] + abbr[abbr_index + 1])
                    if i + integer_num > len(word) or (
                        abbr[abbr_index + 2] in abbr and abbr[abbr_index + 2].isdigit()
                    ):
                        return False
                    i += integer_num
                    abbr_index += 2
                else:
                    integer_num = int(abbr[abbr_index])
                    if i + integer_num > len(word):
                        return False
                    i += integer_num
                    abbr_index += 1
            else:
                return False
        if i == len(word) and abbr_index == len(abbr):
            return True
        return False
