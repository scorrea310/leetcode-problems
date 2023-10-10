class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        map_s_to_t = {}
        map_t_to_s = {}

        s_index = 0
        t_index = 0

        while s_index < len(s) and t_index < len(t):
            if s[s_index] not in map_s_to_t and t[t_index] not in map_t_to_s:
                map_s_to_t[s[s_index]] = t[t_index]
                map_t_to_s[t[t_index]] = s[s_index]
                s_index += 1
                t_index += 1
            elif (
                s[s_index] in map_s_to_t
                and t[t_index] in map_t_to_s
                and map_s_to_t[s[s_index]] == t[t_index]
                and map_t_to_s[t[t_index]] == s[s_index]
            ):
                s_index += 1
                t_index += 1
            else:
                return False
        return True
