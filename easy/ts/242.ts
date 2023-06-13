// https://leetcode.com/problems/valid-anagram/description/
// Time Complexity: O(s + t) 
// Space Complexity: O(s)
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    let charAndFrequency = {}
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        if(charAndFrequency[char] === undefined) {
            charAndFrequency[char] = 1
        } else {
            charAndFrequency[char]++
        }
    }

    for(let i = 0; i < t.length; i++) {
        let tChar = t[i]
        if(charAndFrequency[tChar] === undefined || charAndFrequency[tChar] === 0) {
            return false
        } else {
            charAndFrequency[tChar]--
        }
    }
    return true
};