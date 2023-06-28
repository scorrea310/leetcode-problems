// https://leetcode.com/problems/is-subsequence/description/

// Time Complexity: O(|T|) where is |T| is length of target string
// Space Complexity: O(1)
function isSubsequence(s: string, t: string): boolean {

    let currSCharIndex = 0;
    let currTCharIndex = 0;
    while(currSCharIndex < s.length && currTCharIndex < t.length) {
        if(s[currSCharIndex] === t[currTCharIndex]) {
            currSCharIndex++
            currTCharIndex++
        } else {
            currTCharIndex++
        }
    }
    if(currSCharIndex < s.length) return false
    return true
};