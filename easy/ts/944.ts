// https://leetcode.com/problems/delete-columns-to-make-sorted/description/
// Time Complexity: O(n * k) where n is length of arr, k length of strings
// Space Complexity: O(1)
function minDeletionSize(strs: string[]): number {
    let count = 0

    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] < strs[j - 1][i]) {
                count++
                break
            }
        }
    }
    return count
};