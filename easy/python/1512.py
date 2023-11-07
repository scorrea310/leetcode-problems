class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        freq = {}
        count = 0
        for num in nums:
            if num not in freq:
                freq[num] = 1
            else:
                freq[num] += 1
        for key in freq:
            if freq[key] < 2:
                continue
            else:
                pairs = (freq[key] * (freq[key] - 1)) / 2
                count += pairs
        return int(count)
