# https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
# Time: O(n)
# Space: O(1)
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True

        if len(flowerbed) == 1:
            if flowerbed[0] == 0 and n == 1:
                return True
            else:
                return False

        open_spots = 0
        start = 0

        while start < len(flowerbed):
            if start == 0:
                if flowerbed[start + 1] != 1 and flowerbed[start] == 0:
                    flowerbed[start] = 1
                    open_spots += 1
                    start += 2
                else:
                    start += 1
            elif start == (len(flowerbed) - 1):
                if flowerbed[start - 1] == 0 and flowerbed[start] == 0:
                    flowerbed[start] = 1
                    open_spots += 1
                    start += 2
                else:
                    start += 1
            else:
                if (
                    flowerbed[start + 1] != 1
                    and flowerbed[start - 1] != 1
                    and flowerbed[start] == 0
                ):
                    flowerbed[start] = 1
                    open_spots += 1
                    start += 2
                else:
                    start += 1
        return open_spots >= n
