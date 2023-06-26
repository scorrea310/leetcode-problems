// https://leetcode.com/problems/first-unique-character-in-a-string/description/

// Time Complexity: O(n) where n is length of string
// Space Complexity: O(1) becase in our hashMap we only store 26 items max!!!
function firstUniqChar(s: string): number {
    if(s.length === 1) return 0
    if(s.length === 2) return s[0] === s[1] ? -1 : 0
    let charToOccurences = {}

    for(let i = 0; i < s.length; i++) {
        if(charToOccurences[s[i]] !== undefined) {
            charToOccurences[s[i]]++
        } else {
           charToOccurences[s[i]] = 1 
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(charToOccurences[s[i]] === 1) return i
    }
    return -1
};