// https://leetcode.com/problems/unique-number-of-occurrences/
// Time Complexity: O(n)
// Space Complexity: O(n)
function uniqueOccurrences(arr: number[]): boolean {
    let numOccur = {}
    for(let i = 0; i < arr.length; i++){
        if(numOccur[arr[i]] === undefined) {
            numOccur[arr[i]] = 1
        } else {
            numOccur[arr[i]]++
        }
    }

    let values = Object.values(numOccur)
    let set = new Set()

    for(let i = 0; i < values.length; i++) {
        if(set.has(values[i]) === false) {
            set.add(values[i])
        } else {
            return false
        }
    }
    return true
};