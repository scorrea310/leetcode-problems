// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
// Time Complexity: O(log(n))
// Space Complexity: O(1)
var nextGreatestLetter = function(letters, target) {
    if(letters[letters.length - 1] < target) return letters[0]
    if(letters[0] > target) return letters[0]

    let left = 0
    let right = letters.length - 1
    let middle;
    while(left <= right) {
        middle = Math.floor((left + right) / 2)
        console.log(left, middle, right)
        if(letters[middle] <= target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    if(left === letters.length) return letters[0]

    return letters[left]
};