# https://leetcode.com/problems/shuffle-the-array/
# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer[]}
def shuffle(nums, n)
    arr = []

    i = 0
    j = (nums.length / 2).floor

    while j < nums.length
        arr.push(nums[i])
        arr.push(nums[j])
        i +=1
        j+=1
    end
    arr
end