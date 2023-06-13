// https://leetcode.com/problems/top-k-frequent-elements/description/
// Time Complexity: O(n * log(n)) because sorting is most expensive operation.
// Space Complexity: O(n)
function topKFrequent(nums: number[], k: number): number[] {
    let frequency = {}

    for(let i = 0; i < nums.length; i++) {
        if(frequency[nums[i]] === undefined) {
            frequency[nums[i]] = [1, nums[i]]
        } else {
            frequency[nums[i]][0] =  frequency[nums[i]][0] + 1 
        }
    }

    let sorted: number[][] = Object.values(frequency as number[][]).sort((a, b) => {
        return b[0] - a[0]
    })
    
    let answer: number[] = []
    for(let i = 0; i < k; i++){
        answer.push(sorted[i][1])
    }
    return answer
};